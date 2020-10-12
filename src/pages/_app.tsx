import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import React from 'react'
import type { FC } from 'react'
import { createGlobalStyle } from 'styled-components'

import NProgress from '@/components/NProgress'
import fullPath from '@/helpers/fullPath'

const GlobalStyle = createGlobalStyle`
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

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  const value = metric.name === 'CLS' ? metric.value * 1000 : metric.value
  const category =
    metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric'

  gtag('event', metric.name, {
    event_category: category,
    event_label: metric.id,
    non_interaction: true,
    value: Math.round(value)
  })
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
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

      <GlobalStyle />

      <Component {...pageProps} />

      <NProgress />
    </>
  )
}

export default MyApp
