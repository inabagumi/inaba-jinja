/* eslint-disable @typescript-eslint/explicit-function-return-type */

const withOffline = require('next-offline')
const merge = require('webpack-merge')

const nextConfig = {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID || ''
  },
  experimental: {
    modern: true,
    rewrites: () => [
      {
        destination: '/_next/static/service-worker.js',
        source: '/service-worker.js'
      }
    ]
  },
  generateEtags: false,
  webpack: (config, { dev }) =>
    merge(config, {
      module: {
        rules: [
          {
            test: /\.(?:jpe?g|webp)$/,
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
                loader: 'react-svg-loader',
                options: {
                  svgo: {
                    plugins: [
                      {
                        removeViewBox: false
                      }
                    ]
                  }
                }
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

        const manifest = originalManifest.filter(entry =>
          /\/pages\/_.+\.module\.js$/.test(entry.url)
        )

        return { manifest, warnings }
      }
    ],
    skipWaiting: true,
    swDest: 'static/service-worker.js'
  }
}

module.exports = withOffline(nextConfig)
