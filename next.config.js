/* eslint-disable @typescript-eslint/explicit-function-return-type */

const withMDX = require('@next/mdx')()
const withSourceMaps = require('@zeit/next-source-maps')()
const withOffline = require('next-offline')
const { name: packageName, version } = require('./package.json')

const nextConfig = {
  env: {
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_RELEASE: `${packageName}@${version}`
  },
  experimental: {
    headers: () => [
      {
        headers: [
          {
            key: 'cache-control',
            value:
              'max-age=600, public, s-maxage=120, stale-if-error=600, stale-while-revalidate=300'
          },
          {
            key: 'content-security-policy',
            value: [
              "base-uri 'none'",
              "connect-src 'self' https://images.ctfassets.net https://www.google-analytics.com",
              "default-src 'self'",
              "form-action 'none'",
              "frame-ancestors 'none'",
              "img-src 'self' data: https://images.ctfassets.net https://www.google-analytics.com",
              "manifest-src 'self'",
              "object-src 'none'",
              "script-src 'self' 'unsafe-inline' https://ssl.google-analytics.com https://www.google-analytics.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self'"
            ].join('; ')
          },
          {
            key: 'referrer-policy',
            value: 'same-origin, strict-origin-when-cross-origin'
          }
        ],
        source: '/((?!_next).*)'
      },
      {
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=0'
          },
          {
            key: 'service-worker-allowed',
            value: '/'
          }
        ],
        source: '/service-worker.js'
      },
      {
        headers: [
          {
            key: 'content-type',
            value: 'application/manifest+json'
          }
        ],
        source: '/manifest.webmanifest'
      }
    ],
    modern: true,
    pageEnv: true,
    plugins: true,
    rewrites: () => [
      {
        destination: '/_next/static/service-worker.js',
        source: '/service-worker.js'
      },
      {
        destination: '/_next/static/service-worker.js.map',
        source: '/service-worker.js.map'
      }
    ]
  },
  generateEtags: false,
  pageExtensions: ['mdx', 'tsx'],
  webpack(config, { defaultLoaders, dev }) {
    config.module.rules.push({
      test: /\.(?:jpe?g|png|webp)$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'url-loader',
          options: {
            esModule: true,
            limit: 8192,
            name: dev
              ? '[name].[ext]?[contenthash:8]'
              : '[name].[contenthash:8].[ext]',
            outputPath: 'static/media',
            publicPath: '/_next/static/media'
          }
        }
      ]
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@svgr/webpack',
          options: {
            babel: false,
            dimensions: false
          }
        }
      ]
    })

    return config
  },
  workboxOpts: {
    clientsClaim: true,
    manifestTransforms: [
      (originalManifest) => {
        const warnings = []
        const manifest = originalManifest.filter((entry) =>
          /\/pages\/(?:_[^.]+)\.module\.js$/.test(entry.url)
        )

        return {
          manifest,
          warnings
        }
      }
    ],
    runtimeCaching: [
      {
        handler: 'NetworkFirst',
        urlPattern: /\/(?:disclaimer|kuji\/\w|lottery|privacy|share\/\w+)?$/
      },
      {
        handler: 'NetworkFirst',
        urlPattern: /\.(?:ico|jpe?g|js|json|png|webp)$/i
      },
      {
        handler: 'CacheFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200]
          }
        },
        urlPattern: /^https:\/\/images\.ctfassets\.net\//i
      }
    ],
    skipWaiting: true,
    swDest: 'static/service-worker.js'
  }
}

module.exports = [withSourceMaps, withMDX, withOffline].reduce(
  (config, plugin) => plugin(config),
  nextConfig
)
