import mail from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { EnvConfig } from "services/envConfig";

mail.setApiKey(EnvConfig.sendGridApiKey);

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body;
    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;
    const data = {
        to: "letrdo@gmail.com",
        from: "dolt@guide.inc",
        subject: `[${body.email}] - ${body.subject}`,
        text: message,
        html: message.replace(/\r\n/g, "<br />"),
    };

    try {
        const [response] = await mail.send(data);
        res.status(200).json(response.body);
    } catch (error: any) {
        res.status(error.code).json(error);
    }
};

export default contact;
