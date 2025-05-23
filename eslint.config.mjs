import eslint from '@eslint/js'
import eslintCdkPlugin from 'eslint-cdk-plugin'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  // global設定
  {
    ignores: [
      '.amplify/**/*',
      '.next/**/*',
      '.vscode/**/*',
      'node_modules/**/*',
      'prisma/**/*',
      'eslint.config.mjs',
    ],
  },

  // ルール適用
  {
    files: ['src/**/*.{js,mjs,jsx,ts,tsx}, tests/**/*.{js,mjs,jsx,ts,tsx}'],
    plugins: {
      eslint: eslint,
      tseslint: tseslint,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tseslint.configs.eslintRecommended.rules,
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.stylistic.rules,
    },
  },
  {
    // @typescript-eslintに関する設定
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
        ...globals.builtin,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    // srcにのみUnicornを適用
    files: ['src/**/*.{js,mjs,jsx,ts,tsx}'],
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/better-regex': 'warn',
    },
  },
  {
    // CDKには専用のプラグインを適用
    files: ['amplify/backend.ts', 'amplify/**/*.{js,mjs,jsx,ts,tsx}'],
    plugins: {
      cdk: eslintCdkPlugin,
    },
    // rules: {
    //   ...eslintCdkPlugin.configs.recommended.rules,
    // },
  },
]

// https://zenn.dev/hisho/articles/23c39e18282687
// https://zenn.dev/ikemo/scraps/ad6a3dcdf90055
// https://astris.design/atcl/next15-eslint9-prettier/
// https://zenn.dev/yu_ta_9/articles/7001d66779ff3a#%40next%2Feslint-plugin-next
// https://zenn.dev/kazukix/articles/eslint-config-2024-09
// https://qiita.com/masakinihirota/items/b61d595e4ea746adef57
