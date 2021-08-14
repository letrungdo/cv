import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export interface EnvConfig {
    apiUrl: string;
    apiTimeout: number;
    debugLog: string;
    sendGridApiKey: string;
    recaptchaKey: string;
    fbUserID: string;
    fbAppID: string;
    fbAppSecret: string;
}

export const EnvConfig = publicRuntimeConfig as EnvConfig;
