import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginImport from "eslint-plugin-import";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("eslint:recommended", "prettier"),
  {
    plugins: {
      "eslint-plugin-import": eslintPluginImport,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      camelcase: ["warn", { properties: "always" }],
      "capitalized-comments": ["warn", "always"],
      eqeqeq: ["warn", "smart"],
      "func-names": ["warn", "as-needed"],
      "func-style": ["warn", "expression"],
      "no-var": "error",
      "prefer-const": "warn",
      "require-await": "warn",
      "no-undef": "off",
    },
  },
];
