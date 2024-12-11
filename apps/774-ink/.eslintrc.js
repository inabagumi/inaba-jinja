/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    {
      env: {
        commonjs: true
      },
      files: ['.eslintrc.js', 'next.config.js', 'prettier.config.js'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  root: true
}
