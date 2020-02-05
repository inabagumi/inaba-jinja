import { extractCritical } from '@emotion/server'
import { EmotionCritical } from '@emotion/server/create-instance'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'

class MyDocument extends Document<EmotionCritical> {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps & EmotionCritical> {
    const initialProps = await super.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)

    return {
      ...initialProps,
      ...styles
    }
  }

  render(): JSX.Element {
    const { css, ids } = this.props

    return (
      <Html lang="ja">
        <Head>
          <link href="https://www.google-analytics.com" rel="preconnect" />
          <link href="https://www.googletagmanager.com" rel="preconnect" />
          <style
            dangerouslySetInnerHTML={{ __html: css }}
            data-emotion-css={ids.join(' ')}
          />
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
