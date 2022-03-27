module.exports = {
    extends: ["@commitlint/config-conventional"],
    // https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
    rules: {
        "subject-case": [2, "never", ["start-case", "pascal-case"]],
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test",
                "layout",
                "logic",
                "cr",
                "add",
            ],
        ],
    },
};
