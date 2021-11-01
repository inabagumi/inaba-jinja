import withPlugins from 'next-compose-plugins'
import withPWA from 'next-pwa'
import remarkGfm from 'remark-gfm'

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
        source: '/service-worker.js'
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
        source: '/workbox-:hash.js'
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
  pageExtensions: ['mdx', 'tsx', 'ts'],
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
        destination: '/_next/static/service-worker.js',
        source: '/service-worker.js'
      },
      {
        destination: '/_next/static/workbox-:hash.js',
        source: '/workbox-:hash.js'
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
      test: /\.mdx$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            jsx: true,
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkGfm]
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
  }
}

export default withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          buildExcludes: [/\.(?:jpg|png)$/],
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
