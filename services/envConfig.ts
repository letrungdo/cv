import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export interface EnvConfig {
    apiUrl: string;
    apiTimeout: number;
    debugLog: string;
}

export const EnvConfig = publicRuntimeConfig as EnvConfig;
