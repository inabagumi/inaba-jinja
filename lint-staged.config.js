const lintstagedrc = {
  '*.{js,ts,tsx}': (filenames) => [
    `prettier -w ${filenames.join(' ')}`,
    `next lint ${filenames
      .map((filename) => `--file ${filename}`)
      .join(' ')} --fix`
  ],
  '*.{json,md,mdx,yml}': 'prettier -w'
}

export default lintstagedrc
