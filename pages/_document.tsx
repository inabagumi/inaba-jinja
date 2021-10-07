import { Head, Html, Main, NextScript } from 'next/document'
import type { VFC } from 'react'

const Document: VFC = () => {
  return (
    <Html>
      <Head prefix="og: http://ogp.me/ns#">
        <meta content="#ff5722" name="theme-color" />
        <link href="/manifest.webmanifest" rel="manifest" />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}

export default Document
