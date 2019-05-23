module.exports = {
  head: [['link', { href: '/favicon.png', rel: 'icon' }]],
  locales: {
    '/': {
      description:
        'Haneru Developers はバーチャル YouTuber の因幡はねるさんをテーマとしたアプリやサービスの開発を主として行うコミュニティーです。',
      lang: 'ja',
      title: 'Haneru Developers'
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-140696242-1'
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://haneru.dev'
      }
    ]
  ],
  theme: '@vuepress/default',
  themeConfig: {
    docsDir: 'docs',
    editLinkText: 'GitHub でこのページを編集',
    editLinks: true,
    nav: [
      {
        link: '/about/',
        text: 'About'
      },
      {
        link: '/products/',
        text: 'プロダクト'
      }
    ],
    repo: 'inabagumi/website',
    search: false,
    sidebar: [
      '/about/',
      {
        children: [
          '/products/neru-camera',
          '/products/animare-shindan',
          '/products/heartbeat',
          '/products/npm-packages'
        ],
        collapsable: false,
        title: 'プロダクト'
      }
    ]
  }
}
