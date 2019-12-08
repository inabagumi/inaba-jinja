/* eslint-disable @typescript-eslint/explicit-function-return-type */

const merge = require('webpack-merge')

const nextConfig = {
  experimental: {
    plugins: true
  },
  webpack: (config, { dev }) =>
    merge(config, {
      module: {
        rules: [
          {
            test: /\.jpe?g$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                  name: dev
                    ? '[path][name].[ext]?[contenthash:8]'
                    : '[path][name].[contenthash:8].[ext]',
                  outputPath: 'static/images',
                  publicPath: '/_next/static/images'
                }
              }
            ]
          },
          {
            test: /\.svg$/i,
            use: [
              {
                loader: 'react-svg-loader'
              }
            ]
          }
        ]
      }
    })
}

module.exports = nextConfig
