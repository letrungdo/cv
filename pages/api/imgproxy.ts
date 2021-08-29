import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const readable = await axios({
        url: req.query.url as string,
        responseType: "stream",
    });

    await readable.data.pipe(res);
};
