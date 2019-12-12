import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto+Slab:300,400,500,700"
            rel="preload"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:300,400,500,700"
            rel="preload"
          />
          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Serif+JP:300,400,500,700"
            rel="preload"
          />
        </Head>
        <body>
          <Main />

          <NextScript />

          <link
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto+Slab:300,400,500,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:300,400,500,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Serif+JP:300,400,500,700"
            rel="stylesheet"
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
