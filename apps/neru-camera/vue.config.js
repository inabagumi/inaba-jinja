process.env.VUE_APP_URL =
  process.env.DEPLOY_PRIME_URL || process.env.VUE_APP_URL

module.exports = {
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    iconPaths: {
      appleTouchIcon: '/apple-touch-icon.png',
      favicon16: 'img/icons/favicon-16x16.png',
      favicon32: 'img/icons/favicon-32x32.png',
      maskIcon: 'img/icons/mask-icon.svg',
      msTileImage: 'img/icons/mstile.png'
    },
    msTileColor: '#000',
    name: 'ねるカメラ',
    themeColor: '#ff9800',
    workboxOptions: {
      clientsClaim: true,
      exclude: [/\.(?:ico|jpe?g|png|svg)$/, /\.map$/, /manifest\.json$/],
      importWorkboxFrom: 'local',
      runtimeCaching: [
        {
          handler: 'cacheFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
          urlPattern: /\.(?:css|ico|jpe?g|js|png|svg)$/
        },
        {
          handler: 'cacheFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
          urlPattern: /^https:\/\/(?:fonts\.googleapis\.com|fonts\.gstatic\.com)\//i
        },
        {
          handler: 'staleWhileRevalidate',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
          urlPattern: /^https:\/\/video\.twimg\.com\//i
        }
      ],
      skipWaiting: true,
      swDest: 'sw.js'
    }
  }
}
