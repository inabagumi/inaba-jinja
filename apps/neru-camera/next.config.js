const withOffline = require('next-offline')

const nextConfig = {
  crossOrigin: 'anonymous',
  target: 'serverless',
  workboxOpts: {
    clientsClaim: true,
    runtimeCaching: [],
    skipWaiting: true,
    swDest: 'static/service-worker.js'
  }
}

module.exports = withOffline(nextConfig)
