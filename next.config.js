/* eslint-disable @typescript-eslint/explicit-function-return-type */

const withOffline = require('next-offline')
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
                    ? '[name].[ext]?[contenthash:8]'
                    : '[name].[contenthash:8].[ext]',
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
    }),
  workboxOpts: {
    clientsClaim: true,
    manifestTransforms: [
      originalManifest => {
        const warnings = []

        const manifest = originalManifest
          .map(entry => {
            if (/\/pages\/(?!_).+\.js$/.test(entry.url)) return null
            if (/\.jpe?g$/i.test(entry.url)) return null

            return entry
          })
          .filter(Boolean)

        return { manifest, warnings }
      }
    ],
    skipWaiting: true,
    swDest: 'static/service-worker.js'
  }
}

module.exports = withOffline(nextConfig)
