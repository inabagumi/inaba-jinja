module.exports = {
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    iconPaths: {
      appleTouchIcon: 'img/heart-icon-152x152.png',
      favicon16: 'img/heart-icon-16x16.png',
      favicon32: 'img/heart-icon-32x32.png',
      maskIcon: 'img/heart.svg',
      msTileImage: 'img/mstile.png'
    },
    manifestOptions: {
      background_color: '#222',
      icons: [
        {
          sizes: '192x192',
          src: '/img/heart-icon-192x192.png',
          type: 'image/png'
        },
        {
          sizes: '512x512',
          src: '/img/heart-icon-512x512.png',
          type: 'image/png'
        }
      ],
      start_url: '/'
    },
    msTileColor: '#222',
    name: 'Haneru Beat!',
    themeColor: '#fff59d',
    workboxOptions: {
      clientsClaim: true,
      exclude: [
        /\.(?:ico|jpe?g|json|mp3|png|ogg|svg)$/,
        /\.map$/,
        /manifest\.json$/
      ],
      importWorkboxFrom: 'local',
      runtimeCaching: [
        {
          handler: 'cacheFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
          urlPattern: /\.(?:ico|jpe?g|json|mp3|png|ogg|svg)$/
        },
        {
          handler: 'cacheFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200]
            }
          },
          urlPattern: /^https:\/\/(?:fonts\.googleapis\.com|fonts\.gstatic\.com)\//i
        }
      ],
      skipWaiting: true
    }
  }
}
