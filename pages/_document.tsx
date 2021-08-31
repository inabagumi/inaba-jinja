import dedent from 'dedent'
import { Head, Html, Main, NextScript } from 'next/document'
import type { VFC } from 'react'

function createGoogleAnalyticsTrackingCode(trackingID: string): string {
  const trackingCode = dedent`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${trackingID}');
  `

  return trackingCode
}

const Document: VFC = (): JSX.Element => {
  return (
    <Html>
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

export default Document
