import App from 'next/app'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { AssetProvider } from '../context/asset-context'

export default class extends App {
  public render(): ReactElement {
    const { Component, pageProps } = this.props

    return (
      <AssetProvider>
        <Head>
          <title>ねるカメラ</title>
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
