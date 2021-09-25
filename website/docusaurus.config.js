/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  baseUrl: '/',
  favicon: 'img/favicon.png',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
    localeConfigs: {
      ja: {
        label: '日本語'
      }
    }
  },
  organizationName: 'inabagumi',
  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  projectName: 'website',
  tagline: 'ねるねるアプリの世界へようこそ',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      footer: {
        copyright: 'Copyright © 2019 Haneru Developers.',
        links: [
          {
            title: 'ねるねるアプリ',
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
                label: '因幡神社',
                to: 'docs/inaba-jinja'
              }
            ]
          },
          {
            title: 'プロダクト',
            items: [
              {
                label: 'SHINJU DATE',
                to: 'docs/shinju-date'
              },
              {
                label: '21g',
                to: 'docs/21g'
              }
            ]
          },
          {
            title: 'ソーシャル',
            items: [
              {
                href: 'https://github.com/inabagumi',
                label: 'GitHub'
              },
              {
                href: 'https://discord.gg/d9V3PSj',
                label: 'Discord'
              }
            ]
          }
        ],
        style: 'dark'
      },
      googleAnalytics: {
        trackingID: 'UA-140696242-1'
      },
      image: 'https://haneru.dev/img/haneru-dev.jpg',
      navbar: {
        hideOnScroll: true,
        items: [
          {
            activeBasePath: 'docs',
            to: 'docs/',
            label: 'ドキュメント',
            position: 'left'
          },
          {
            to: 'contact',
            label: 'お問い合わせ',
            position: 'right'
          }
        ],
        logo: {
          alt: 'Haneru Developers Logo',
          src: 'img/logo.svg'
        },
        title: 'Haneru Developers'
      }
    }),
  title: 'Haneru Developers',
  url: 'https://haneru.dev'
}
