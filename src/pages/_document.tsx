import dedent from 'dedent'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

function createGoogleAnalyticsTrackingCode(trackingID: string): string {
  const trackingCode = dedent`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingID}');
  `

  return trackingCode
}

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns#">
          <meta content="#ff5722" name="theme-color" />

          <link href="https://www.google-analytics.com" rel="preconnect" />
          <link href="https://www.googletagmanager.com" rel="preconnect" />
          <link href="/manifest.webmanifest" rel="manifest" />

          {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: createGoogleAnalyticsTrackingCode(
                    process.env.NEXT_PUBLIC_GA_TRACKING_ID
                  )
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

export default Document
