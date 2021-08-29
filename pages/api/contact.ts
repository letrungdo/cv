import mail from "@sendgrid/mail";
import { API_RESULT_CODE } from "constants/api";
import { BaseResponse } from "interfaces/response";
import type { NextApiRequest, NextApiResponse } from "next";
import { EnvConfig } from "services/envConfig";

mail.setApiKey(EnvConfig.sendGridApiKey);

const contact = async (req: NextApiRequest, res: NextApiResponse<BaseResponse>) => {
    const body = req.body;
    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;
    const data = {
        to: "letrdo@gmail.com",
        from: "dolt@runsystem.net",
        subject: `[${body.email}] - ${body.subject}`,
        text: message,
        html: message.replace(/\r\n/g, "<br />"),
    };
    await mail.send(data);

    res.status(200).json({
        result: API_RESULT_CODE.OK,
    });
};

export default contact;
