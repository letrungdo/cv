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
    // WARNING: everything listed here is inlined into the client bundle.
    // Secrets (RESEND_API_KEY, RECAPTCHA_SECRET_KEY, FB_APP_SECRET, ...) must
    // stay out of this block - read them server-side via services/serverConfig.
    env: {
        API_URL: process.env.API_URL,
        API_TIMEOUT: process.env.API_TIMEOUT,
        DEBUG_LOG: process.env.DEBUG_LOG,
        RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
        FB_USER_ID: process.env.FB_USER_ID,
    },
    eslint: {
        dirs: ["pages", "components", "config", "constants", "interfaces", "services"],
    },
};
