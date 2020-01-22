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
              label: 'SHINJU DATE',
              to: 'docs/shinju-date'
            },
            {
              label: '21g',
              to: 'docs/21g'
            },
            {
              label: '因幡神社',
              to: 'docs/inaba-jinja'
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
