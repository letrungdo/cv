module.exports = {
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "xn--t-lia.vn",
            },
        ],
    },
    env: {
        API_URL: process.env.API_URL,
        API_TIMEOUT: process.env.API_TIMEOUT,
        DEBUG_LOG: process.env.DEBUG_LOG,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
        FB_USER_ID: process.env.FB_USER_ID,
        FB_APP_ID: process.env.FB_APP_ID,
        FB_APP_SECRET: process.env.FB_APP_SECRET,
    },
};
