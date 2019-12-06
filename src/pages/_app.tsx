import CssBaseline from '@material-ui/core/CssBaseline'
import deepOrange from '@material-ui/core/colors/deepOrange'
import orange from '@material-ui/core/colors/orange'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import messages from '../locales/ja.json'

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: orange,
    type: 'light'
  },
  typography: {
    body1: {
      lineHeight: 2
    },
    body2: {
      lineHeight: 2
    },
    fontFamily: [
      'Roboto',
      'Helvetica',
      'Arial',
      'Noto Sans JP',
      'sans-serif'
    ].join(',')
  }
})

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
        </Head>

        <CssBaseline />

        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default MyApp
