// @ts-check

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  env: {
    es2020: true
  },
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
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
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  root: true,
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['index', 'sibling'],
          'unknown',
          'type'
        ],
        'newlines-between': 'never',
        pathGroups: [
          {
            group: 'internal',
            pattern: '@/**'
          }
        ]
      }
    ],
    'react/jsx-sort-props': 'error',
    'react/sort-prop-types': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true
      }
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        natural: true
      }
    ],
    'sort-vars': [
      'error',
      {
        ignoreCase: false
      }
    ]
  }
}

module.exports = eslintConfig
