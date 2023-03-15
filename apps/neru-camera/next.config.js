const nextPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async headers() {
    return [
      {
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=600, s-maxage=60'
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
        source: '/service-worker.js'
      },
      {
        headers: [
          {
            key: 'cache-control',
            value: 'immutable, max-age=31536000'
          }
        ],
        source: '/workbox-:hash.js'
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
      }
    ]
  }
}

const withPWA = nextPWA({
  dest: '.next/static',
  disable: process.env.NODE_ENV === 'development',
  sw: 'service-worker.js'
})

module.exports = withPWA(nextConfig)
