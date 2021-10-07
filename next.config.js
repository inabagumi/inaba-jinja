const withMDX = require('@next/mdx')()
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['__mocks__', 'components', 'lib', 'pages']
  },
  experimental: {
    optimizeCss: true
  },
  async headers() {
    return [
      {
        headers: [
          {
            key: 'referrer-policy',
            value: 'same-origin, strict-origin-when-cross-origin'
          }
        ],
        source: '/(.*)'
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
      }
    ]
  },
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja']
  },
  images: process.env.IMGIX_BASE_PATH
    ? {
        domains: [],
        loader: 'imgix',
        path: process.env.IMGIX_BASE_PATH
      }
    : {
        domains: []
      },
  reactStrictMode: true,
  async redirects() {
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
  async rewrites() {
    return [
      {
        destination: '/_next/static/service-worker.js$1',
        source: '/service-worker.js(.map)?'
      },
      {
        destination: '/_next/static/workbox-:hash.js$2',
        source: '/workbox-:hash.js(.map)?'
      },
      {
        destination: '/api/manifest',
        source: '/manifest.webmanifest'
      },
      {
        destination: '/api/sitemap',
        source: '/sitemap.xml'
      },
      {
        destination: `https://images.ctfassets.net/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/:asset_id/:unique_id/:filename`,
        source: '/images/contentful/:asset_id/:unique_id/:filename'
      }
    ]
  },
  webpack(config, { defaultLoaders }) {
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

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ['mdx', 'tsx', 'ts']
      }
    ],
    [
      withPWA,
      {
        pwa: {
          buildExcludes: [/\.map$/, /\.(?:jpg|png)$/],
          dest: '.next/static',
          disable: process.env.NODE_ENV === 'development',
          publicExcludes: ['!favicon.ico', '!robots.txt'],
          sw: 'service-worker.js'
        }
      }
    ]
  ],
  nextConfig
)
