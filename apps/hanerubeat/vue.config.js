module.exports = {
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    iconPaths: {
      appleTouchIcon: '',
      favicon16: 'img/heart-icon-16x16.png',
      favicon32: 'img/heart-icon-32x32.png',
      maskIcon: 'img/heart.svg',
      msTileImage: 'img/mstile.png'
    },
    msTileColor: '#222',
    name: 'heartbeat!',
    themeColor: '#fff59d'
  }
}
