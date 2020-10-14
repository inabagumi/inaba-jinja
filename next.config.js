const nextMDX = require('@next/mdx')
const SentryWebpackPlugin = require('@sentry/webpack-plugin')
const cspBuilder = require('content-security-policy-builder')
const withPWA = require('next-pwa')

const withMDX = nextMDX()

const release = [
  process.env.npm_package_name,
  process.env.NOW_GITHUB_COMMIT_SHA || process.env.npm_package_version
].join('@')

const nextConfig = {
  env: {
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_RELEASE: release
  },
  experimental: {
    plugins: true,
    productionBrowserSourceMaps: true
  },
  generateEtags: false,
  headers() {
    return [
      {
        headers: [
          {
            key: 'cache-control',
            value:
              'max-age=600, public, s-maxage=120, stale-if-error=600, stale-while-revalidate=300'
          },
          {
            key: 'content-security-policy',
            value: cspBuilder({
              directives: {
                baseUri: ["'none'"],
                blockAllMixedContent: true,
                connectSrc: [
                  "'self'",
                  'https://images.ctfassets.net',
                  'https://www.google-analytics.com',
                  'https://www.googletagmanager.com',
                  'https://*.imgix.net',
                  'https://*.ingest.sentry.io'
                ],
                defaultSrc: ["'self'"],
                fontSrc: ["'none'"],
                formAction: ["'none'"],
                frameAncestors: ["'none'"],
                imgSrc: [
                  "'self'",
                  'data:',
                  'https://images.ctfassets.net',
                  'https://www.google-analytics.com',
                  'https://www.googletagmanager.com',
                  'https://*.imgix.net'
                ],
                manifestSrc: ["'self'"],
                objectSrc: ["'none'"],
                ...(process.env.CSP_REPORT_URL
                  ? {
                      reportUri: process.env.CSP_REPORT_URL
                    }
                  : {}),
                scriptSrc: [
                  "'self'",
                  "'unsafe-inline'",
                  "'unsafe-eval'",
                  'https://www.google-analytics.com',
                  'https://www.googletagmanager.com'
                ],
                styleSrc: ["'self'", "'unsafe-inline'"],
                workerSrc: ["'self'"]
              }
            })
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
          }
        ],
        source: '/service-worker.js(.map)?'
      },
      {
        headers: [
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
            key: 'cache-control',
            value: 'public,max-age=31536000,immutable'
          }
        ],
        source: '/workbox-:hash.js(.map)?'
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
    ]
  },
  pageExtensions: ['mdx', 'tsx'],
  pwa: {
    buildExcludes: [
      /\.map$/,
      /(^|\/)(?:card|main-visual)\.[0-9a-f]{8}\.(?:jpg|png)$/
    ],
    dest: '.next/static',
    disable: process.env.NODE_ENV === 'development',
    publicExcludes: ['!favicon.ico', '!robots.txt'],
    sw: '/service-worker.js'
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: '/about',
        permanent: true,
        source: '/disclaimer'
      }
    ]
  },
  async rewrites() {
    return [
      {
        destination: '/_next/static/service-worker.js$1',
        source: '/service-worker.js(.map)?'
      },
      {
        destination: '/_next/static/workbox-:hash.js$2',
        source: '/workbox-:hash.js(.map)?'
      }
    ]
  },
  webpack(config, { defaultLoaders, dev }) {
    const urlLoader = {
      loader: 'url-loader',
      options: {
        esModule: false,
        limit: 8192,
        name: dev
          ? '[name].[ext]?[contenthash:8]'
          : '[name].[contenthash:8].[ext]',
        outputPath: 'static/media',
        publicPath: '/_next/static/media'
      }
    }

    config.module.rules.push({
      test: /\.jpg$/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'lqip-loader',
          options: {
            base64: true,
            pallete: false
          }
        },
        urlLoader
      ]
    })

    config.module.rules.push({
      test: /\.png$/,
      use: [defaultLoaders.babel, urlLoader]
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

    if (
      process.env.SENTRY_AUTH_TOKEN &&
      process.env.SENTRY_ORG &&
      process.env.SENTRY_PROJECT
    ) {
      config.plugins.push(
        new SentryWebpackPlugin({
          ignore: ['node_modules'],
          include: '.next',
          release,
          urlPrefix: '~/_next'
        })
      )
    }

    return config
  }
}

module.exports = [withMDX, withPWA].reduce(
  (config, plugin) => plugin(config),
  nextConfig
)
