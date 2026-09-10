import { API_RESULT_CODE } from "constants/api";
import { BaseResponse } from "interfaces/response";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { ServerConfig } from "services/serverConfig";

const MAX_LEN = { name: 100, email: 254, subject: 200, message: 5000 };
/** reCAPTCHA v3 returns 0.0 (bot) - 1.0 (human). */
const RECAPTCHA_MIN_SCORE = 0.5;

const resend = new Resend(ServerConfig.resendApiKey);

const escapeHtml = (value: string) =>
    value.replace(
        /[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
    );

const verifyRecaptcha = async (token: unknown): Promise<boolean> => {
    if (!ServerConfig.recaptchaSecretKey) {
        // Not configured yet - fail open so the form keeps working, but make
        // the gap loud. Set RECAPTCHA_SECRET_KEY to actually block bots.
        console.error("RECAPTCHA_SECRET_KEY is not set - skipping bot verification");

        return true;
    }
    if (typeof token !== "string" || !token) return false;

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: ServerConfig.recaptchaSecretKey, response: token }),
    });
    const data = (await res.json()) as {
        success: boolean;
        score?: number;
        action?: string;
        "error-codes"?: string[];
    };
    const passed = data.success && (data.score ?? 0) >= RECAPTCHA_MIN_SCORE && data.action === "submit";
    if (!passed) {
        // "invalid-input-secret" almost always means the *site* key was pasted
        // into RECAPTCHA_SECRET_KEY - the two look nearly identical.
        console.error("reCAPTCHA rejected", {
            success: data.success,
            score: data.score,
            action: data.action,
            errorCodes: data["error-codes"],
        });
    }

    return passed;
};

const contact = async (req: NextApiRequest, res: NextApiResponse<BaseResponse>) => {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        res.status(405).json({ result: API_RESULT_CODE.ERROR, errorCode: 405, message: "Method not allowed" });

        return;
    }
    if (!ServerConfig.resendApiKey || !ServerConfig.contactFrom || !ServerConfig.contactTo) {
        console.error("Mail is not configured: RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL");
        res.status(500).json({ result: API_RESULT_CODE.ERROR, errorCode: 500, message: "Mail is not configured" });

        return;
    }

    const { name, email, subject, message, recaptchaToken } = (req.body ?? {}) as Record<string, unknown>;
    const fields = { name, email, subject, message };
    const invalid = Object.entries(fields).find(
        ([key, value]) =>
            typeof value !== "string" || !value.trim() || value.length > MAX_LEN[key as keyof typeof MAX_LEN]
    );
    if (invalid) {
        res.status(400).json({
            result: API_RESULT_CODE.ERROR,
            errorCode: 400,
            message: `Invalid field: ${invalid[0]}`,
        });

        return;
    }
    const form = fields as Record<keyof typeof MAX_LEN, string>;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        res.status(400).json({ result: API_RESULT_CODE.ERROR, errorCode: 400, message: "Invalid email address" });

        return;
    }

    if (!(await verifyRecaptcha(recaptchaToken))) {
        res.status(403).json({ result: API_RESULT_CODE.ERROR, errorCode: 403, message: "reCAPTCHA verification failed" });

        return;
    }

    const text = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const { data, error } = await resend.emails.send({
        from: ServerConfig.contactFrom,
        to: ServerConfig.contactTo,
        // Sender stays the verified domain (so SPF/DKIM pass); replying goes
        // to the visitor instead.
        replyTo: form.email,
        subject: `[CV Contact] ${form.subject}`,
        text,
        html: escapeHtml(text).replace(/\n/g, "<br />"),
    });

    if (error) {
        console.error("Resend send failed", error);
        res.status(502).json({ result: API_RESULT_CODE.ERROR, errorCode: 502, message: "Could not send the message" });

        return;
    }

    res.status(200).json({ result: API_RESULT_CODE.OK, message: data?.id });
};

export default contact;
