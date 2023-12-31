import { BaseResponse } from "interfaces/response";

export interface FbProfileRes extends BaseResponse {
    data?: {
        height: number;
        is_silhouette: boolean;
        url: string;
        width: number;
    };
}
