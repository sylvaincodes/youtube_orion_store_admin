import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: { globals: globals.browser },
    // react version
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // ignore files and folders
  {
    ignores: [
      ".next",
      "node_modules",
      "components/ui/*",
      "hooks/*",
      "cypress/*",
      "cypress.config.ts",
      "tailwind.config.ts",
      "__tests__/*",
      "babel.config.js",
      "jest.config.ts"
    ],
  },
];
