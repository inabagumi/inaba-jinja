import App, { AppContext, AppInitialProps } from 'next/app'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { AssetProvider } from '../context/asset-context'

type Props = {
  baseUrl: string
  description: string
  title: string
}

export default class extends App<Props> {
  public static async getInitialProps(
    ctx: AppContext
  ): Promise<AppInitialProps & Props> {
    const appInitialProps = await super.getInitialProps(ctx)

    return {
      ...appInitialProps,
      baseUrl: process.env.NERU_CAMERA_BASE_URL || '',
      description: process.env.NERU_CAMERA_DESCRIPTION || '',
      title: process.env.NERU_CAMERA_TITLE || ''
    }
  }

  public render(): ReactElement {
    const { Component, baseUrl, description, pageProps, title } = this.props

    return (
      <AssetProvider>
        <Head>
          <title>{title}</title>

          <meta content={description} name="description" />

          <meta content="website" property="og:type" />
          <meta content={`${baseUrl}/`} property="og:url" />
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta
            content={`${baseUrl}/img/main-visual.jpg`}
            property="og:image"
          />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={title} name="twitter:title" />
          <meta content={description} name="twitter:description" />
          <meta
            content={`${baseUrl}/img/main-visual.jpg`}
            name="twitter:image"
          />

          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:400"
            rel="preload"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400"
            rel="preload"
          />
        </Head>

        <Component {...pageProps} />

        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:400"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400"
          rel="stylesheet"
        />

        <style global jsx>{`
          html {
            font-family: Noto Sans JP, Roboto, sans-serif;
          }

          body {
            margin: 0;
          }
        `}</style>
      </AssetProvider>
    )
  }
}
