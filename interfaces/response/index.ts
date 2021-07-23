export * from "./auth";

export interface ServerError {
    apiPath: string;
    errorCode: number | string;
}

/** Common response */
export interface BaseResponse extends ServerError {
    result: string;
    message: string;
}
