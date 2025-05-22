// import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import securityPlugin from "eslint-plugin-security";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

const flatCompat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // NextJs推奨設定
  ...flatCompat.config({
    extends: ["next", "next/typescript", "next/core-web-vitals", "prettier"],
    settings: {
      next: {
        rootDir: ".",
      },
    },
  }),
  // global設定
  {
    files: [
      "**/*.{js,mjs,jsx,ts,tsx}, tests/**/*.{js,mjs,jsx,ts,tsx}, amplify/**/*.{js,mjs,jsx,ts,tsx}",
    ],
  },
  {
    ignores: [
      ".amplify/**/*",
      ".next/**/*",
      ".vscode/**/*",
      "node_modules/**/*",
      "prisma/**/*",
      "eslint.config.mjs",
    ],
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: [
      "**/*.{js,mjs,jsx,ts,tsx}, tests/**/*.{js,mjs,jsx,ts,tsx}, amplify/**/*.{js,mjs,jsx,ts,tsx}",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: ".",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@next/next": next,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      security: securityPlugin,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...securityPlugin.configs.recommended.rules,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.strict,
  {
    // eslint-plugin-react の設定
    settings: {
      react: {
        version: "detect",
      },
    },
    // recommended に含まれていない eslint-plugin-react のルールを有効化
    rules: {
      "react/destructuring-assignment": "error", // Props などの分割代入を強制
      "react/hook-use-state": "error", // useState の返り値の命名を [value, setValue] に統一
      "react/jsx-boolean-value": "error", // boolean 型の Props の渡し方を統一
      "react/jsx-fragments": "error", // React Fragment の書き方を統一
      "react/jsx-curly-brace-presence": "error", // Props と children で不要な中括弧を削除
      "react/jsx-no-useless-fragment": "error", // 不要な React Fragment を削除
      "react/jsx-sort-props": "error", // Props の並び順をアルファベット順に統一
      "react/self-closing-comp": "error", // 子要素がない場合は自己終了タグを使う
      "react/jsx-pascal-case": "error", // コンポーネント名をパスカルケースに統一
      "react/no-danger": "error", // dangerouslySetInnerHTML を許可しない
      "react/prop-types": "off", // Props の型チェックは TS で行う & 誤検知があるため無効化
    },
  },
  // {
  //   // eslint-plugin-import の設定
  //   plugins: { import: importPlugin },
  //   rules: {
  //     "import/order": [
  //       // import の並び順を設定
  //       "warn",
  //       {
  //         groups: [
  //           "builtin",
  //           "external",
  //           "internal",
  //           ["parent", "sibling"],
  //           "object",
  //           "type",
  //           "index",
  //         ],
  //         "newlines-between": "always",
  //         pathGroupsExcludedImportTypes: ["builtin"],
  //         alphabetize: { order: "asc", caseInsensitive: true },
  //         pathGroups: [
  //           {
  //             pattern: "react",
  //             group: "external",
  //             position: "before",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // },
  {
    // eslint-plugin-unused-imports の設定
    plugins: { "unused-imports": unusedImportsPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // 重複エラーを防ぐため typescript-eslint の方を無効化
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    // eslint-plugin-perfectionist の設定
    plugins: { perfectionist: perfectionistPlugin },
    rules: {
      "perfectionist/sort-interfaces": "warn", // interface のプロパティの並び順をアルファベット順に統一
      "perfectionist/sort-object-types": "warn", // Object 型のプロパティの並び順をアルファベット順に統一
    },
  },
];

// https://zenn.dev/kazukix/articles/eslint-config-2024-09
// https://qiita.com/masakinihirota/items/b61d595e4ea746adef57
