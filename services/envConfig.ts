/**
 * Client-safe config only.
 *
 * Values here are inlined into the browser bundle via the `env` block in
 * next.config.js, so NEVER add a secret to this file. Server-only secrets
 * belong in services/serverConfig.ts.
 */
export const EnvConfig = {
    apiUrl: process.env.API_URL,
    apiTimeout: process.env.API_TIMEOUT as number | undefined,
    debugLog: process.env.DEBUG_LOG,
    /** reCAPTCHA v3 *site* key - public by design. */
    recaptchaKey: process.env.RECAPTCHA_KEY ?? "",
    fbUserID: process.env.FB_USER_ID,
};
