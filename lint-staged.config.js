/** @type {import('lint-staged').Config} */
const lintstagedrc = {
  '*.{css,js,json,ts,tsx,md,mdx,yml}': 'prettier -w'
}

export default lintstagedrc
