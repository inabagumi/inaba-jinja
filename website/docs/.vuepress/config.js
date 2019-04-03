module.exports = {
  head: [
    ['link', { href: '/favicon.png', rel: 'icon' }]
  ],
  locales: {
    '/': {
      description: 'ねるねるアプリの世界へようこそ!',
      lang: 'ja',
      title: 'Haneru Developers'
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true]
  ],
  theme: '@vuepress/default',
  themeConfig: {
    nav: [
      {
        items: [
          {
            link: 'https://neru.camera/',
            text: 'ねるカメラ'
          },
          {
            link: 'https://shindan.animare.cafe/',
            text: 'あなたのオタクタイプ診断 by あにまーれ'
          },
          {
            link: 'https://heartbeat.haneru.dev/',
            text: 'heartbeat!'
          }
        ],
        text: 'プロダクト'
      }
    ],
    repo: 'inabagumi/website',
    search: false
  }
}
