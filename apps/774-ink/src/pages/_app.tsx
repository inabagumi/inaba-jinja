import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { FC } from 'react'
import { appleTouchIcon, favicon256x256 } from '@/assets'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href={favicon256x256.src} rel="icon" type="image/png" />
      <link href={appleTouchIcon.src} rel="apple-touch-icon" type="image/png" />
    </Head>

    <DefaultSeo
      additionalMetaTags={[
        {
          content: '#544643',
          name: 'theme_color'
        }
      ]}
    />

    <Component {...pageProps} />

    <style global jsx>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html {
        background-color: #544643;
        color: #fff;
        font-family: sans-serif;
        line-height: 1;
      }

      body {
        margin: 0;
      }

      a {
        color: #e85465;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </>
)

export default MyApp
