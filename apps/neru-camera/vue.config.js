module.exports = {
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    iconPaths: {
      appleTouchIcon: 'apple-touch-icon.png',
      favicon16: 'img/icons/favicon-16x16.png',
      favicon32: 'img/icons/favicon-32x32.png',
      maskIcon: 'img/icons/mask-icon.svg',
      msTileImage: 'img/icons/mstile.png'
    },
    manifestOptions: {
      background_color: '#000',
      icons: [
        {
          src: './img/icons/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      start_url: '/'
    },
    msTileColor: '#000',
    name: process.env.VUE_APP_TITLE,
    themeColor: '#ff9800',
    workboxOptions: {
      clientsClaim: true,
      exclude: [/\.(?:ico|jpe?g|png|svg)$/, /\.map$/, /manifest\.json$/],
      importWorkboxFrom: 'local',
      runtimeCaching: [
        {
          handler: 'CacheFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
          urlPattern: /\.(?:css|ico|jpe?g|js|png|svg)$/
        },
        {
          handler: 'CacheFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
          urlPattern: /^https:\/\/(?:fonts\.googleapis\.com|fonts\.gstatic\.com)\//i
        }
      ],
      skipWaiting: true,
      swDest: 'sw.js'
    }
  }
}
