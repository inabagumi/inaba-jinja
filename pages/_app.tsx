import '@/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import dedent from 'dedent'
import { type FunctionComponent, type MDXComponents } from 'mdx/types'
import { type AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { type FC } from 'react'
import appleTouchIcon from '@/assets/icons/apple-touch-icon.png'
import favicon192x192 from '@/assets/icons/favicon-192x192.png'
import favicon512x512 from '@/assets/icons/favicon-512x512.png'
import Background from '@/components/background'
import Link, { Props as LinkProps } from '@/components/link'

const mdxComponents: MDXComponents = {
  a: Link as FunctionComponent<LinkProps>
}

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <Head>
        <meta content="viewport-fit=cover,width=device-width" name="viewport" />

        <link
          href={favicon192x192.src}
          rel="icon"
          sizes={`${favicon192x192.width}x${favicon192x192.height}`}
          type="image/png"
        />
        <link
          href={favicon512x512.src}
          rel="icon"
          sizes={`${favicon512x512.width}x${favicon512x512.height}`}
          type="image/png"
        />
        <link
          href={appleTouchIcon.src}
          rel="apple-touch-icon"
          sizes={`${appleTouchIcon.width}x${appleTouchIcon.height}`}
        />
      </Head>

      {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: dedent`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
              `
            }}
            id="gtag-init"
            strategy="afterInteractive"
          />
        </>
      )}

      <Component {...pageProps} />
      <Background />
    </MDXProvider>
  )
}

export default MyApp
