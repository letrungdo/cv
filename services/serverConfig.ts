/**
 * Server-only secrets. Read straight from process.env at runtime and kept out
 * of the `env` block in next.config.js so they are never bundled for the
 * browser.
 */
if (typeof window !== "undefined") {
    throw new Error("services/serverConfig must never be imported from client code");
}

export const ServerConfig = {
    resendApiKey: process.env.RESEND_API_KEY ?? "",
    /** reCAPTCHA v3 *secret* key. */
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY ?? "",
    /** Verified Resend sender, e.g. "Website <contact@xn--t-lia.vn>". */
    contactFrom: process.env.CONTACT_FROM_EMAIL ?? "",
    contactTo: process.env.CONTACT_TO_EMAIL ?? "",
    fbAppID: process.env.FB_APP_ID,
    fbAppSecret: process.env.FB_APP_SECRET,
};
