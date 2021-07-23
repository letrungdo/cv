/* eslint-disable */
import { EnvConfig } from "services/envConfig";

let logDev = (_message?: any, ..._optionalParams: any[]) => {};
let logError = (_message?: any, ..._optionalParams: any[]) => {};

if (EnvConfig.debugLog === "debug") {
    logDev = console.log.bind(console);
    logError = console.error.bind(console);
}

export { logDev, logError };
