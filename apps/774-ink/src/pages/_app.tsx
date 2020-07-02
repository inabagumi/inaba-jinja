import '@/styles/globals.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import React, { FC } from 'react'
import { appleTouchIconURL, favicon256x256URL } from '@/assets'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link href={favicon256x256URL} rel="icon" type="image/png" />
      <link href={appleTouchIconURL} rel="apple-touch-icon" type="image/png" />
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
  </>
)

export default MyApp
