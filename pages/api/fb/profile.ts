import { API_RESULT_CODE } from "constants/api";
import { FbProfileRes } from "interfaces/response";
import type { NextApiRequest, NextApiResponse } from "next";
import { getAccessToken } from "services/fbService";

const fbProfile = async (req: NextApiRequest, res: NextApiResponse<FbProfileRes>) => {
    const { userID } = req.query;
    if (!userID) {
        res.status(400).json({
            result: API_RESULT_CODE.ERROR,
            message: "userID missing!",
        });

        return;
    }
    const response = await fetch(
        `https://graph.facebook.com/${userID}/picture?type=large&access_token=${getAccessToken()}&redirect=false`,
    );
    const result: { data: { url: string } } = await response?.json();

    res.status(200).json({
        result: API_RESULT_CODE.OK,
        profileUrl: result?.data?.url,
    });
};

export default fbProfile;
