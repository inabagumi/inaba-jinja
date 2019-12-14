import { ServerStyleSheets } from '@material-ui/core/styles'
import CleanCSS from 'clean-css'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React, { Children } from 'react'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets()

    const initialProps = await super.getInitialProps({
      ...ctx,
      renderPage: () =>
        ctx.renderPage({
          enhanceApp: App => (props): JSX.Element =>
            sheets.collect(<App {...props} />)
        })
    })

    const cleanCSS = new CleanCSS()
    const { styles } = cleanCSS.minify(sheets.toString())

    return {
      ...initialProps,
      styles: [
        ...Children.toArray(initialProps.styles),
        <style
          dangerouslySetInnerHTML={{ __html: styles }}
          id="jss-server-side"
          key="jss-server-side"
        />
      ]
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link href="https://www.google-analytics.com" rel="preconnect" />
          <link href="https://www.googletagmanager.com" rel="preconnect" />
          <link
            as="style"
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:300,400,500,700"
            rel="preload"
          />
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
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Roboto:300,400,500,700"
            rel="stylesheet"
          />
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
