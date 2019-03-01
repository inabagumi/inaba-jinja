// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTypeScript = require('@zeit/next-typescript')

module.exports = withTypeScript({
  webpack: config => config
})
