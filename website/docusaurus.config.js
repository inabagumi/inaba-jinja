module.exports = {
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'inabagumi',
  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  projectName: 'website',
  tagline: 'ねるねるアプリの世界へようこそ',
  themeConfig: {
    footer: {
      copyright: 'Copyright © 2019 Haneru Developers.',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction'
            }
          ]
        },
        {
          title: 'プロダクト',
          items: [
            {
              label: 'ねるカメラ',
              to: 'docs/neru-camera'
            },
            {
              label: 'あにまーれ診断',
              to: 'docs/animare-shindan'
            },
            {
              label: 'Haneru Beat!',
              to: 'docs/hanerubeat'
            },
            {
              label: 'あにまーれ検索',
              to: 'docs/animare-search'
            }
          ]
        },
        {
          title: 'ソーシャル',
          items: [
            {
              href: 'https://github.com/inabagumi',
              label: 'GitHub'
            }
          ]
        }
      ],
      style: 'dark'
    },
    googleAnalytics: {
      trackingID: 'UA-140696242-1'
    },
    image: 'img/haneru-dev.jpg',
    navbar: {
      links: [
        { to: 'docs/introduction', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/inabagumi',
          label: 'GitHub',
          position: 'right'
        }
      ],
      logo: {
        alt: 'Haneru Developers Logo',
        src: 'img/logo.svg'
      },
      title: 'Haneru Developers'
    }
  },
  title: 'Haneru Developers',
  url: 'https://haneru.dev'
}
