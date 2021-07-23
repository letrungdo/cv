import { CancelToken } from "axios";
import { AUTH_LOGIN } from "constants/api";
import { AuthLoginReq } from "interfaces/request";
import { AuthLoginRes } from "interfaces/response";
import api from "services/api";

export const authLogin = (payload: AuthLoginReq, cancelToken: CancelToken) => {
    return api.post<AuthLoginRes>(AUTH_LOGIN, payload, {
        cancelToken,
    });
};
