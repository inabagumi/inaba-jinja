import { cache } from '@emotion/css'
import { CacheProvider, Global, css } from '@emotion/react'
import { MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import React, { FC } from 'react'
import { Metric } from 'web-vitals'

import Link from 'components/atoms/Link'
import Progress from 'components/atoms/Progress'
import Layout from 'components/templates/Layout'
import fullPath from 'helpers/fullPath'

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
`

const MDXComponents = {
  a: Link
}

export const reportWebVitals = ({ id, name, value }: Metric): void => {
  gtag('event', name, {
    event_category: 'Web Vitals',
    event_label: id,
    non_interaction: true,
    value: Math.round(name === 'CLS' ? value * 1000 : value)
  })
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      openGraph={{
        type: 'article'
      }}
      twitter={{
        cardType: 'summary_large_image',
        site: '@Inaba_Jinja'
      }}
      titleTemplate="%s - 因幡神社"
    />

    <LogoJsonLd
      logo={fullPath('/images/favicon-192x192.png')}
      url={fullPath('/')}
    />

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
      <MDXProvider components={MDXComponents}>
        <Global styles={globalStyles} />

        <Layout>
          <Component {...pageProps} />
        </Layout>

        <Progress />
      </MDXProvider>
    </CacheProvider>
  </>
)

export default MyApp
