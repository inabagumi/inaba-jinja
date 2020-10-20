import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class extends Document {
  public render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link href="/manifest.json" rel="manifest" />
          <link
            href="https://fonts.googleapis.com/css?display=swap&amp;family=Noto+Sans+JP:400"
            rel="stylesheet"
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
