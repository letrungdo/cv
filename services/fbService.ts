import { EnvConfig } from "./envConfig";

export const getAccessToken = () => `${EnvConfig.fbAppID}|${EnvConfig.fbAppSecret}`;
