module.exports = {
  head: [
    ['link', { href: '/favicon.png', rel: 'icon' }]
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
  },
  title: 'Haneru Developers'
}
