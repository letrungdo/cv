const isProd = process.env.NODE_ENV === "production";

module.exports = {
    poweredByHeader: false,
    env: {
        PUBLIC_URL: isProd ? "https://cv.letrungdo.com" : "",
    },
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL,
        apiTimeout: process.env.API_TIMEOUT,
        debugLog: process.env.DEBUG_LOG,
        sendGridApiKey: process.env.SENDGRID_API_KEY,
        recaptchaKey: process.env.RECAPTCHA_KEY,
        fbUserID: process.env.FB_USER_ID,
        fbAppID: process.env.FB_APP_ID,
        fbAppSecret: process.env.FB_APP_SECRET,
    },
    images: {
        domains: ["xn--t-lia.vn", "static.xx.fbcdn.net"],
    },
};
