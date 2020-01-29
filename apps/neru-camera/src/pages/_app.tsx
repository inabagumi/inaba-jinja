import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import React, { FC } from 'react'
import { AssetProvider } from '../context/asset-context'
import { SiteProvider } from '../context/site-context'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const Provider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SiteProvider>
      <AssetProvider>{children}</AssetProvider>
    </SiteProvider>
  </ThemeProvider>
)

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider>
    <CssBaseline />

    <Component {...pageProps} />
  </Provider>
)

export default MyApp
