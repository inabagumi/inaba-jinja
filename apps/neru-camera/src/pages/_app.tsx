import CssBaseline from '@material-ui/core/CssBaseline'
import App from 'next/app'
import React, { ReactElement } from 'react'
import { AssetProvider } from '../context/asset-context'
import { SiteProvider } from '../context/site-context'

export default class extends App {
  public componentDidMount(): void {
    const jssStyles = document.getElementById('jss-server-side')

    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  public render(): ReactElement {
    const { Component, pageProps } = this.props

    return (
      <SiteProvider>
        <AssetProvider>
          <CssBaseline />

          <Component {...pageProps} />
        </AssetProvider>
      </SiteProvider>
    )
  }
}
