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
          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto+Slab:300,400,500,700"
            rel="preload"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:300,400,500,700"
            rel="preload"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Serif+JP:300,400,500,700"
            rel="preload"
          />
        </Head>

        <CssBaseline />

        <Component {...pageProps} />

        <ProgressBar />

        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto+Slab:300,400,500,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:300,400,500,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Serif+JP:300,400,500,700"
          rel="stylesheet"
        />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default MyApp
