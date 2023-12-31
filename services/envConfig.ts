export const EnvConfig = {
    apiUrl: process.env.API_URL,
    apiTimeout: process.env.API_TIMEOUT as number | undefined,
    debugLog: process.env.DEBUG_LOG,
    sendGridApiKey: process.env.SENDGRID_API_KEY ?? "",
    recaptchaKey: process.env.RECAPTCHA_KEY ?? "",
    fbUserID: process.env.FB_USER_ID,
    fbAppID: process.env.FB_APP_ID,
    fbAppSecret: process.env.FB_APP_SECRET,
};
