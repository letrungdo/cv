const env = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;

export const ENV = Object.freeze({
    DEV: env === "development",
    STG: env === "staging",
    PRD: env === "production",
    TEST: env === "test",
});
export const drawerWidth = "32rem";
export const DEFAULT_EMPTY = "-";

export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0";
export const DOMAIN_URL = "https://xn--t-lia.vn";

// Storage key
export const THEME_MODE_STORAGE_KEY = "theme_mode";
