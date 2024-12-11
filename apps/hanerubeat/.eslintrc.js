/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: ['**/*.ts?(x)'],
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
