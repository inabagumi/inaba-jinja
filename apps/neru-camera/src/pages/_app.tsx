import App from 'next/app'
import React, { ReactElement } from 'react'
import { AssetProvider } from '../context/asset-context'
import { SiteProvider } from '../context/site-context'
import Layout from '../layouts/main'

export default class extends App {
  public render(): ReactElement {
    const { Component, pageProps } = this.props

    return (
      <SiteProvider>
        <AssetProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AssetProvider>
      </SiteProvider>
    )
  }
}
