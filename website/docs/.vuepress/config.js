module.exports = {
  head: [
    ['link', { href: '/favicon.png', rel: 'icon' }]
  ],
  locales: {
    '/': {
      description: 'Haneru Developers はバーチャル YouTuber の因幡はねるさんをテーマとしたアプリやサービスの開発を主として行うコミュニティーです。',
      lang: 'ja',
      title: 'Haneru Developers'
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'sitemap',
      {
        hostname: 'https://haneru.dev'
      }
    ]
  ],
  theme: '@vuepress/default',
  themeConfig: {
    nav: [
      {
        link: 'mailto:contact@haneru.dev',
        text: 'お問い合わせ'
      }
    ],
    repo: 'inabagumi/website',
    search: false
  }
}
