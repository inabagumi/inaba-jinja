import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    let initialProps: DocumentInitialProps

    try {
      initialProps = await super.getInitialProps({
        ...ctx,
        renderPage: () =>
          ctx.renderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />)
          })
      })
      initialProps.styles = (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    } catch {
      initialProps = await super.getInitialProps(ctx)
    } finally {
      sheet.seal()
    }

    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns#">
          <meta content="#ff5722" name="theme-color" />

          <link href="https://www.google-analytics.com" rel="preconnect" />
          <link href="https://www.googletagmanager.com" rel="preconnect" />
          <link href="/manifest.webmanifest" rel="manifest" />
          <link
            href="/images/favicon-192x192.png"
            rel="icon"
            sizes="192x192"
            type="image/png"
          />
          <link
            href="/images/favicon-512x512.png"
            rel="icon"
            sizes="512x512"
            type="image/png"
          />
          <link
            href="/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="152x152"
          />

          {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: [
                    'window.dataLayer = window.dataLayer || [];',
                    'function gtag(){dataLayer.push(arguments);}',
                    "gtag('js', new Date());",
                    `gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');`
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

export default Document
