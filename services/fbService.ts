import { ServerConfig } from "./serverConfig";

export const getAccessToken = () => `${ServerConfig.fbAppID}|${ServerConfig.fbAppSecret}`;
