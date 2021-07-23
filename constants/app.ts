const env = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;

export const ENV = Object.freeze({
    DEV: env === "development",
    STG: env === "staging",
    PRD: env === "production",
    TEST: env === "test",
});

export const DEFAULT_EMPTY = "-";

export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0";
