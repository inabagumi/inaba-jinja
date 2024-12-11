import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const title = process.env.NEXT_PUBLIC_TITLE || ''
    const themeColor = '#fff59d'

    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns#">
          <meta content={themeColor} name="theme-color" />
          <meta content="#222" name="msapplication-TileColor" />
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta
            content="default"
            name="apple-mobile-web-app-status-bar-style"
          />
          <meta content={title} name="apple-mobile-web-app-title" />
          <meta content="/img/mstile.png" name="msapplication-TileImage" />
          <link href="/manifest.json" rel="manifest" />
          <link
            href="/img/heart-icon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            href="/img/heart-icon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link href="/img/heart-icon-152x152.png" rel="apple-touch-icon" />
          <link color={themeColor} href="/img/heart.svg" rel="mask-icon" />
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
