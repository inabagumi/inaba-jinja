const nextPWA = require('next-pwa')

const nextConfig = {
  headers() {
    return [
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
  rewrites() {
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
  },
  webpack(config, { defaultLoaders, dev }) {
    config.module.rules.push({
      test: /\.(?:mp3|ogg|vtt)$/i,
      use: [
        defaultLoaders.babel,
        {
          loader: 'url-loader',
          options: {
            limit: 2 * 1024,
            name: dev
              ? '[name].[ext]?[contenthash:8]'
              : '[name].[contenthash:8].[ext]',
            outputPath: 'static/media',
            publicPath: '/_next/static/media'
          }
        }
      ]
    })

    return config
  }
}

const withPWA = nextPWA({
  dest: '.next/static',
  disable: process.env.NODE_ENV === 'development',
  sw: 'service-worker.js'
})

module.exports = withPWA(nextConfig)
