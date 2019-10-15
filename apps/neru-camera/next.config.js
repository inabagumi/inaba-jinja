const withOffline = require('next-offline')

const nextConfig = {
  crossOrigin: 'anonymous',
  env: {
    NERU_CAMERA_BASE_URL: process.env.NERU_CAMERA_BASE_URL,
    NERU_CAMERA_DESCRIPTION: process.env.NERU_CAMERA_DESCRIPTION,
    NERU_CAMERA_TITLE: process.env.NERU_CAMERA_TITLE
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
