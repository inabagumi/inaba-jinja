import nextMDX from '@next/mdx'
import rehypeExternalLinks from 'rehype-external-links'
import remarkGfm from 'remark-gfm'

const withMDX = nextMDX({
  options: {
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true
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
  pageExtensions: ['tsx', 'mdx', 'ts'],
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

export default withMDX(nextConfig)
