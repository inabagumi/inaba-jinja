const withOffline = require('next-offline')

const nextConfig = {
  crossOrigin: 'anonymous',
  env: {
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    NERU_CAMERA_BASE_URL: process.env.NERU_CAMERA_BASE_URL,
    NERU_CAMERA_DESCRIPTION: process.env.NERU_CAMERA_DESCRIPTION,
    NERU_CAMERA_TITLE: process.env.NERU_CAMERA_TITLE
  },
  experimental: {
    plugins: true,
    rewrites: () => [
      {
        destination: '/_next/static/service-worker.js',
        source: '/service-worker.js'
      }
    ]
  },
  target: 'serverless',
  workboxOpts: {
    clientsClaim: true,
    runtimeCaching: [],
    skipWaiting: true,
    swDest: 'static/service-worker.js'
  }
}

module.exports = withOffline(nextConfig)
