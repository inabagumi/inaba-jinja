/* eslint-disable @typescript-eslint/explicit-function-return-type */

const { default: withSvg } = require('@inabagumi/next-svg')
const withSourceMaps = require('@zeit/next-source-maps')
const withOffline = require('next-offline')
const merge = require('webpack-merge')

const nextConfig = {
  env: {
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN || '',
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID || '',
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    SENTRY_DSN: process.env.SENTRY_DSN
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
  svgrOptions: {
    dimensions: false
  },
  webpack: (config, { defaultLoaders, dev }) =>
    merge(config, {
      module: {
        rules: [
          {
            test: /\.(?:jpe?g|png|webp)$/,
            use: [
              defaultLoaders.babel,
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

module.exports = withSourceMaps()(withSvg(withOffline(nextConfig)))
