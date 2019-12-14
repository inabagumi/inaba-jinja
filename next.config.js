/* eslint-disable @typescript-eslint/explicit-function-return-type */

const withOffline = require('next-offline')
const merge = require('webpack-merge')

const nextConfig = {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID || ''
  },
  experimental: {
    modern: true,
    plugins: true
  },
  generateEtags: false,
  webpack: (config, { dev }) =>
    merge(config, {
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
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
            test: /\.svg$/,
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
            if (
              (entry.url.endsWith('.js') && !/\.module\.js$/.test(entry.url)) ||
              /\/pages\/(?!_).+\.js$/.test(entry.url) ||
              /\.jpe?g$/i.test(entry.url)
            ) {
              return null
            }

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
