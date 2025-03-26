import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import type { FlatConfig } from "eslint";

const config: FlatConfig[] = [
  js.configs.recommended,
  tsPlugin.configs.recommended,
  {
    ignores: ["node_modules", "dist", "build", ".husky", ".eslintrc.js"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-empty-interface": "off",
    },
  },
];

export default config;
