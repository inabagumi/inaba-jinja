import { cache } from '@emotion/css'
import { CacheProvider, Global, css } from '@emotion/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo'
import React, { FC, useEffect } from 'react'
import SEO from '../../next-seo.config'
import Layout from '../components/templates/Layout'

const globalStyles = css`
  :root {
    --ij-default-font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
      Helvetica, Arial, YuGothic, Yu Gothic, sans-serif;
    --ij-serif-font-family: Garamond, Times New Roman, YuMincho, Yu Mincho,
      serif;
  }

  html {
    box-sizing: border-box;
    font-family: var(--ij-default-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
  }

  body {
    background-color: #424242;
    color: #fafafa;
    margin: 0;
    line-height: 2;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body,
  html,
  #__next {
    height: 100%;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: #f57f17;
  }

  a:hover {
    color: #ff6f00;
  }
`

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
      <DefaultSeo {...SEO} />

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

      <CacheProvider value={cache}>
        <Global styles={globalStyles} />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </>
  )
}

export default MyApp
