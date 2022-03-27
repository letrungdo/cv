module.exports = {
    extends: [
        "next",
        "next/core-web-vitals",
        // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
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
    },
};
