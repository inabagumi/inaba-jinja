/** @type {import('lint-staged').Config} */
const lintstagedrc = {
  '*.{js,ts,tsx}': (filenames) =>
    `next lint ${filenames.map((filename) => `--file ${filename}`).join(' ')} --fix`
}

export default lintstagedrc
