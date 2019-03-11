module.exports = api => {
  const env = api.env()

  const plugins = []

  if (env === 'test') {
    plugins.push('dynamic-import-node')
  }

  return {
    plugins,
    presets: ['@vue/app']
  }
}
