module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "next",
        "next/core-web-vitals",
        // Uses the recommended rules from @eslint-plugin-react
        "plugin:react/recommended",
        // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended",
        /* Enables eslint-plugin-prettier and eslint-config-prettier. 
             This will display prettier errors as ESLint errors. 
             Make sure this is always the last configuration in the extends array. */
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,
        // Allows for the use of imports
        sourceType: "module",
    },
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
                patterns: ["../*", "./../*"],
            },
        ],
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: "detect",
        },
    },
    env: {
        browser: true,
        es6: true,
    },
};
