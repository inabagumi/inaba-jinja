import deepOrange from '@material-ui/core/colors/deepOrange'
import orange from '@material-ui/core/colors/orange'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import messages from '../locales/ja.json'

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: orange,
    type: 'light'
  }
})

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <IntlProvider locale="ja" messages={messages}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default MyApp
