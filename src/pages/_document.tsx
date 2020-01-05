import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          {process.env.GA_TRACKING_ID && (
            <>
              <link href="https://www.google-analytics.com" rel="preconnect" />
              <link href="https://www.googletagmanager.com" rel="preconnect" />
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: [
                    'window.dataLayer = window.dataLayer || [];',
                    'function gtag(){dataLayer.push(arguments);}',
                    "gtag('js', new Date());",
                    `gtag('config', '${process.env.GA_TRACKING_ID}');`
                  ].join('')
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
