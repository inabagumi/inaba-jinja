import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import React, { FC } from 'react'
import contentfulClient from '../contentfulClient'
import { AssetProvider } from '../context/asset-context'
import { SiteProvider } from '../context/site-context'
import { OverlayEntry, OverlayFields } from '../types/Overlay'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

type Props = {
  assets: OverlayEntry[]
}

const MyApp = ({
  Component,
  assets,
  pageProps
}: AppProps & Props): JSX.Element => (
  <ThemeProvider theme={theme}>
    <SiteProvider>
      <AssetProvider assets={assets}>
        <CssBaseline />

        <Component {...pageProps} />
      </AssetProvider>
    </SiteProvider>
  </ThemeProvider>
)

MyApp.getInitialProps = async (
  ctx: AppContext
): Promise<AppInitialProps & Props> => {
  const initialProps = await App.getInitialProps(ctx)
  const entries = await contentfulClient
    .getEntries<OverlayFields>({
      content_type: 'overlay', // eslint-disable-line @typescript-eslint/camelcase
      limit: 100,
      order: 'sys.createdAt',
      select: 'sys.id,fields.keyColor,fields.media'
    })
    .catch(() => null)
  const assets = entries?.items || []

  return {
    ...initialProps,
    assets
  }
}

export default MyApp
