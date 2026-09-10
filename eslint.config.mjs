import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    // import.meta.dirname is available after Node.js v20.11.0
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ["next", "prettier"],
        rules: {
            // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: "*", next: ["return", "export"] },
                { blankLine: "any", prev: "export", next: "export" },
                // Always require blank lines after import, except between imports
                { blankLine: "always", prev: "import", next: "*" },
                { blankLine: "any", prev: "import", next: "import" },
            ],
            "@typescript-eslint/ban-types": "off",
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "no-restricted-imports": [
                "error",
                {
                    patterns: ["../../*", "./../*"],
                },
            ],
            "no-console": "error",
            "@typescript-eslint/no-non-null-assertion": "off",
            "import/no-anonymous-default-export": "off",
            "prefer-template": "error",
            "@next/next/no-duplicate-head": "off",
        },
    }),
    {
        // API routes are server code: console is the log sink there, and
        // gating it behind DEBUG_LOG hides real delivery failures.
        files: ["pages/api/**/*.ts"],
        rules: {
            "no-console": "off",
        },
    },
    {
        // serverConfig holds secrets - importing it from client code would
        // inline them into the browser bundle.
        files: ["components/**/*.{ts,tsx}", "pages/**/*.tsx"],
        rules: {
            "no-restricted-imports": [
                "error",
                {
                    patterns: ["../../*", "./../*"],
                    paths: [
                        {
                            name: "services/serverConfig",
                            message: "serverConfig contains secrets and must stay out of client code.",
                        },
                    ],
                },
            ],
        },
    },
];

export default eslintConfig;
