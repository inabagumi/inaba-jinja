module.exports = {
  ...require('@inabagumi/prettier-config'),
  overrides: [
    {
      files: ['*.md'],
      options: {
        parser: 'markdown-nocjsp'
      }
    },
    {
      files: ['*.mdx'],
      options: {
        parser: 'mdx-nocjsp'
      }
    }
  ]
}
