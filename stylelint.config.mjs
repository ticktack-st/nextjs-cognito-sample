/** @type {import('stylelint').Config} */
export default {
  ignoreFiles: [
    //   '.amplify/**/*',
    //   '.next/**/*',
    //   '.vscode/**/*',
    //   'node_modules/**/*',
    //   'prisma/**/*',
    //   '**/dist/**/*',
    //   'next-env.d.ts',
    //   'next.config.js',
    //   'postcss.config.mjs',
    //   'stylelint.config.mjs',
    //   'eslint.config.mjs',
    'src/app/globals.css',
  ],
  extends: [
    'stylelint-config-recommended',
    // 'stylelint-config-standard',
  ],
  overrides: [
    {
      files: ['src/**/*.{js,mjs,jsx,ts,tsx}', 'tests/**/*.{js,mjs,jsx,ts,tsx}'],
      customSyntax: 'postcss-lit',
    },
  ],
}
