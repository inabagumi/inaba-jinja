import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import App, { AppContext, AppInitialProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { IntlProvider } from 'react-intl'
import ProgressBar from '../components/atoms/ProgressBar'
import theme from '../theme'

type Props = {
  locale: string
  messages: Record<string, string>
}

class MyApp extends App<Props> {
  static async getInitialProps(
    appContext: AppContext
  ): Promise<AppInitialProps & Props> {
    const appProps = await super.getInitialProps(appContext)
    const locale = 'ja'
    const messages: Record<string, string> = await import(
      /* webpackExclude: /whitelist_.+\.json$/ */
      /* webpackChunkName: 'locales/[request]' */
      `../locales/${locale}`
    )

    return {
      ...appProps,
      locale,
      messages
    }
  }

  componentDidMount(): void {
    const jssStyles = document.getElementById('jss-server-side')
    jssStyles?.parentNode?.removeChild(jssStyles)
  }

  render(): JSX.Element {
    const { Component, locale, messages, pageProps } = this.props

    return (
      <IntlProvider defaultLocale="ja" locale={locale} messages={messages}>
        <ThemeProvider theme={theme}>
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

          <CssBaseline />

          <Component {...pageProps} />

          <ProgressBar />
        </ThemeProvider>
      </IntlProvider>
    )
  }
}

export default MyApp
