import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import ProgressBar from '../components/atoms/ProgressBar'
import messages from '../locales/ja.json'
import theme from '../theme'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <IntlProvider locale="ja" messages={messages}>
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

export default MyApp
