const merge = require('webpack-merge')

module.exports = ({ config }) => {
  config.module.rules = []

  return merge(config, {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.jpe?g$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'react-svg-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx']
    }
  })
}
