import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { SiteProvider } from '../context/site-context'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side')

    jssStyles?.parentNode?.removeChild(jssStyles)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <SiteProvider>
        <CssBaseline />

        <Component {...pageProps} />
      </SiteProvider>
    </ThemeProvider>
  )
}

export default MyApp
