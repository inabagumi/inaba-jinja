import inabagumiPrettierConfig from '@inabagumi/prettier-config' with { type: 'json' }

/** @type {import('prettier').Config} */
const prettierConfig = {
  ...inabagumiPrettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'twMerge']
}

export default prettierConfig