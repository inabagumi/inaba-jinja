module.exports = {
  '*.{js,ts,tsx}': (filenames) => [
    `prettier -w ${filenames.join(' ')}`,
    `next lint ${filenames
      .map((filename) => `--file ${filename}`)
      .join(' ')} --fix`
  ],
  '*.{json,yml}': 'prettier -w'
}
