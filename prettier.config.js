import inabagumiPrettierConfig from '@inabagumi/prettier-config' with { type: 'json' }

/** @type {import('prettier').Config} */
const prettierConfig = {
  ...inabagumiPrettierConfig
}

export default prettierConfig
