/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/react',
    'prettier'
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript'
      ],
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        'react/prop-types': 'off'
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true
          }
        }
      }
    },
    {
      env: {
        commonjs: true
      },
      files: ['.*rc.js', '*.config.js']
    }
  ],
  parserOptions: {
    sourceType: 'module'
  },
  root: true,
  rules: {
    // todo https://github.com/alexgorbatchev/eslint-import-resolver-typescript/issues/72
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@(?:docusaurus|theme)/']
      }
    ],
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
        'newlines-between': 'never'
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
    'sort-vars': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
