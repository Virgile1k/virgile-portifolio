 /* eslint-env node */
// @ts-nocheck
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022, // Specify the ECMAScript version
    sourceType: 'module',
    project: './tsconfig.json', // Provide the path to your tsconfig.json
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  plugins: ['react-refresh'],
};
