import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React, { FC, useEffect } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChangeComplete = (url: string): void => {
      requestAnimationFrame(() => {
        if (!process.env.GA_TRACKING_ID) return

        /* eslint-disable @typescript-eslint/camelcase */
        window.gtag('config', process.env.GA_TRACKING_ID, {
          page_location: url,
          page_title: document.title
        })
        /* eslint-enable @typescript-eslint/camelcase */
      })
    }

    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return (): void => {
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <Head>
        <meta content="#ff5722" name="theme-color" />

        <link href="/manifest.webmanifest" rel="manifest" />
        <link
          href="/images/favicon-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/images/favicon-512x512.png"
          rel="icon"
          sizes="512x512"
          type="image/png"
        />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="152x152"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
