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
    msTileColor: '#222',
    name: 'heartbeat!',
    themeColor: '#fff59d',
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
        }
      ],
      skipWaiting: true
    }
  }
}
