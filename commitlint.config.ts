import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
      ],
    ],

    "subject-empty": [2, "never"],

    "subject-case": [2, "never", ["start-case", "pascal-case", "upper-case"]],

    "header-max-length": [2, "always", 72],

    "subject-full-stop": [2, "never", "."],

    "body-leading-blank": [1, "always"],

    "type-case": [2, "always", "lower-case"],

    "type-empty": [2, "never"],
  },
};

export default Configuration;
