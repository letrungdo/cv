import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { API_APP_ERROR_CODE, AXIOS_TIMEOUT_CODE } from "constants/api";
import { BaseResponse } from "interfaces/response";
import baseAxios from "services/baseAxios";
import { logDev, logError } from "utils/logs";

const errorHandle = async (url: string, error: AxiosError) => {
    logError(error);
    const errorRes = {
        apiPath: url,
        errorCode: error.response?.status || error.message,
    } as BaseResponse;
    if (error?.response) {
        // TODO:
        return errorRes;
    } else {
        const config: AxiosRequestConfig = error?.config;
        if (config) {
            switch (error.code) {
                case AXIOS_TIMEOUT_CODE:
                    // TODO:
                    return errorRes;
            }
        }
        if (error?.isAxiosError) {
            // Network error
            // TODO:
            return errorRes;
        }
    }
    // Unexpected error
    logError("Call api unexpected error");

    return errorRes;
};

const request = async <T = any>(url: string, config: AxiosRequestConfig): Promise<T & BaseResponse> => {
    let result = null;
    try {
        logDev("\x1b[32m%s\x1b[0m", "INFO call api:", JSON.stringify(config));
        result = await (await baseAxios(config)).data;
    } catch (error) {
        // CancelToken
        if (axios.isCancel(error)) {
            logDev("\x1b[32m%s\x1b[0m", "INFO request canceled", JSON.stringify(config), error.message);
            result = {
                apiPath: url,
                errorCode: API_APP_ERROR_CODE.CANCEL,
            } as BaseResponse;
        } else {
            result = await errorHandle(url, error);
        }
    }

    return result;
};

const api = {
    post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => {
        return request<T>(url, { method: "post", url, data, ...config });
    },
    get: <T = any>(url: string, config?: AxiosRequestConfig) => {
        return request<T>(url, { method: "get", url, ...config });
    },
};

export default api;
