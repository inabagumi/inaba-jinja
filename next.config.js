const nextMDX = require('@next/mdx')
const withPWA = require('next-pwa')

const withMDX = nextMDX()

const nextConfig = {
  experimental: {
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
  images: {
    domains: ['images.ctfassets.net']
  },
  pageExtensions: ['mdx', 'tsx'],
  pwa: {
    buildExcludes: [/\.map$/, /\.(?:jpg|png)$/],
    dest: '.next/static',
    disable: process.env.NODE_ENV === 'development',
    publicExcludes: ['!favicon.ico', '!robots.txt'],
    sw: '/service-worker.js'
  },
  reactStrictMode: true,
  redirects() {
    return [
      {
        destination: '/lottery',
        permanent: true,
        source: '/kuji'
      },
      {
        destination: '/about',
        permanent: true,
        source: '/disclaimer'
      }
    ]
  },
  rewrites() {
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
  webpack(config, { defaultLoaders }) {
    const urlLoader = {
      loader: 'url-loader',
      options: {
        esModule: false,
        limit: 8192,
        name: '[name].[contenthash:8].[ext]',
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

    return config
  }
}

module.exports = [withMDX, withPWA].reduce(
  (config, plugin) => plugin(config),
  nextConfig
)
