import deepOrange from '@material-ui/core/colors/deepOrange'
import yellow from '@material-ui/core/colors/yellow'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import React, { FC } from 'react'
import { IntlProvider } from 'react-intl'
import messages from '../locales/ja.json'

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: yellow,
    type: 'light'
  }
})

const MyApp: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <IntlProvider locale="ja" messages={messages}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default MyApp
