const withOffline = require('next-offline')

const nextConfig = {
  crossOrigin: 'anonymous',
  experimental: {
    plugins: true
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  headers: () => [
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
    }
  ],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  rewrites: () => [
    {
      destination: '/_next/static/service-worker.js',
      source: '/service-worker.js'
    }
  ],
  workboxOpts: {
    clientsClaim: true,
    runtimeCaching: [],
    skipWaiting: true,
    swDest: 'static/service-worker.js'
  }
}

module.exports = withOffline(nextConfig)
