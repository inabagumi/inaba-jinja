const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja']
  },
  pwa: {
    dest: '.next/static',
    disable: process.env.NODE_ENV === 'development',
    sw: 'service-worker.js'
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

module.exports = withPWA(nextConfig)
