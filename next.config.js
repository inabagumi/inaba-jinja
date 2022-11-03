import nextMDX from '@next/mdx'
import nextPWA from 'next-pwa'
import rehypeExternalLinks from 'rehype-external-links'
import remarkGfm from 'remark-gfm'

const withMDX = nextMDX({
  options: {
    jsx: true,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ['noopener', 'noreferrer'],
          target: '_blank'
        }
      ]
    ],
    remarkPlugins: [remarkGfm]
  }
})

const withPWA = nextPWA({
  buildExcludes: [/app-build-manifest\.json$/, /\.(?:jpg|png)$/],
  dest: '.next/static',
  disable: process.env.NODE_ENV === 'development',
  publicExcludes: ['!favicon.ico', '!robots.txt'],
  sw: 'service-worker.js'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['__mocks__', 'app', 'lib', 'ui']
  },
  experimental: {
    appDir: true
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
  images: {
    remotePatterns: [
      {
        hostname: 'images.ctfassets.net',
        pathname: `/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/**`
      }
    ]
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
      }
    ]
  },
  swcMinify: true,
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

export default withMDX(withPWA(nextConfig))
