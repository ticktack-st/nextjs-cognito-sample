// import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import securityPlugin from "eslint-plugin-security";
// import spellcheckPlugin from "eslint-plugin-spellcheck";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

const flatCompat = new FlatCompat();

export default [
  {
    // グローバルで読み込むファイルの拡張子
    files: ["**/*.{js,mjs,jsx,ts,tsx}"],
  },
  {
    // グローバルで無視するファイル
    ignores: [
      "**/.amplify/**/*",
      "**/.next/**/*",
      "**/.vscode/**/*",
      "**/amplify/**/*",
      "**/components/**/*",
      "**/node_modules/**/*",
      "**/prisma/**/*",
      "**/public/**/*",
      "**/dist/**/*",
      "eslint.config.mjs",
      "next.config.ts",
      "next-env.d.ts",
      "postcss.config.mjs",
      "tailwind.config.js",
      "tsconfig.json",
      "tsconfig.eslint.json",
      "app/configure.ts",
    ],
  },
  {
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
  // Shareable Configs を有効化
  js.configs.recommended,
  ...tseslint.configs.strict,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  // Flat Config 未対応のプラグインは FlatCompat を使用
  // ...flatCompat.extends("plugin:react-hooks/recommended"),
  // ESLint v9 で削除された API "context.getScope" を内部で使用しているプラグインは fixupConfigRules で対応
  // ...fixupConfigRules(
  //   flatCompat.extends(
  //     // "plugin:import/recommended", // TODO: 現時点だと色々動かないので eslint-plugin-import が Flat Config に対応したら有効化する
  //     "plugin:testing-library/react",
  //     "plugin:storybook/recommended"
  //   )
  // ),
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
  {
    // eslint-plugin-react-hooks の設定
    rules: {
      "react-hooks/exhaustive-deps": "error", // recommended では warn のため error に上書き
    },
  },
  {
    // eslint-plugin-import の設定
    plugins: { import: importPlugin },
    rules: {
      "import/order": [
        // import の並び順を設定
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "object",
            "type",
            "index",
          ],
          "newlines-between": "always",
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
        },
      ],
    },
  },
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
  // {
  //   // eslint-plugin-spellcheck の設定
  //   plugins: { spellcheck: spellcheckPlugin },
  //   rules: {
  //     "spellcheck/spell-checker": [
  //       "error",
  //       {
  //         minLength: 5, // 5 文字以上の単語をチェック
  //         // チェックをスキップする単語の配列
  //         skipWords: ["noreferrer", "compat", "tseslint", "globals", "fixup"],
  //       },
  //     ],
  //   },
  // },
  {
    // eslint-plugin-perfectionist の設定
    plugins: { perfectionist: perfectionistPlugin },
    rules: {
      "perfectionist/sort-interfaces": "warn", // interface のプロパティの並び順をアルファベット順に統一
      "perfectionist/sort-object-types": "warn", // Object 型のプロパティの並び順をアルファベット順に統一
    },
  },
  // prettierConfig // フォーマット は Prettier で行うため、フォーマット関連のルールを無効化
];

// https://zenn.dev/kazukix/articles/eslint-config-2024-09
// https://qiita.com/masakinihirota/items/b61d595e4ea746adef57
