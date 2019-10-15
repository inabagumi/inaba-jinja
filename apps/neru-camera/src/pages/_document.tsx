import Document, { Head, Html, Main, NextScript } from 'next/document'
import React, { ReactElement } from 'react'

export default class extends Document {
  public render(): ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <link href="/manifest.json" rel="manifest" />

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
        <body>
          <Main />

          <NextScript />

          <link
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:400"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400"
            rel="stylesheet"
          />
        </body>
      </Html>
    )
  }
}
