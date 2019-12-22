/* eslint-disable @typescript-eslint/camelcase */

const { homepage: siteUrl } = require('./package.json')

const title = '因幡神社'
const description =
  '因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。'

/**
 * @type import('gatsby').GatsbyConfig
 */
module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    {
      options: {
        trackingId: process.env.GA_TRACKING_ID
      },
      resolve: 'gatsby-plugin-google-analytics'
    },
    {
      options: {
        color: '#ff5722',
        showSpiner: false
      },
      resolve: 'gatsby-plugin-nprogress'
    },
    {
      options: {
        background_color: '#fafafa',
        description,
        display: 'minimal-ui',
        icon: 'src/assets/icon.png',
        lang: 'ja',
        name: title,
        scope: '/',
        short_name: title,
        start_url: '.',
        theme_color: '#ff5722'
      },
      resolve: 'gatsby-plugin-manifest'
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-typescript'
  ],
  siteMetadata: {
    description,
    siteUrl,
    title
  }
}
