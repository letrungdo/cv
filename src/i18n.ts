import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// ref: https://react.i18next.com/legacy-v9/step-by-step-guide

i18n
    // lazy loading for translations using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: "en", // use en if detected lng is not available
        debug: false,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        // Loading multiple translation files
        ns: ["common", "main", "portfolio", "resume"],
        defaultNS: "common",
    });

export default i18n;
