import { Global, css } from '@emotion/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import React, { FC } from 'react'

const globalStyles = css`
  body {
    background-color: #222;
    bottom: 0;
    left: 0;
    margin: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  #__next {
    height: 100%;
  }
`

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const title = process.env.NEXT_PUBLIC_TITLE || ''
  const description = process.env.NEXT_PUBLIC_DESCRIPTION

  return (
    <>
      <Head>
        <meta content="#fff59d" name="theme-color" />
        <meta content="#222" name="msapplication-TileColor" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content={title} name="apple-mobile-web-app-title" />
        <meta content="/img/mstile.png" name="msapplication-TileImage" />
        <link href="/manifest.json" rel="manifest" />
        <link
          href="/img/heart-icon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/img/heart-icon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link href="/img/heart-icon-152x152.png" rel="apple-touch-icon" />
        <link color="#fff59d" href="/img/heart.svg" rel="mask-icon" />
      </Head>

      <DefaultSeo
        description={description}
        openGraph={{
          images: [
            {
              height: 630,
              url: new URL(
                '/img/main-visual.jpg',
                process.env.NEXT_PUBLIC_BASE_URL
              ).toString(),
              width: 1200
            }
          ],
          type: 'website'
        }}
        titleTemplate={`%s - ${title}`}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />

      <Global styles={globalStyles} />

      <Component {...pageProps} />
    </>
  )
}

export default App
