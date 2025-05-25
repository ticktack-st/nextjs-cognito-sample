/** @type {import('stylelint').Config} */
export default {
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
