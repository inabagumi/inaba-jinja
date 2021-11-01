import '@/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import dedent from 'dedent'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useCallback, useEffect } from 'react'
import appleTouchIcon from '@/assets/icons/apple-touch-icon.png'
import favicon192x192 from '@/assets/icons/favicon-192x192.png'
import favicon512x512 from '@/assets/icons/favicon-512x512.png'
import Background from '@/components/background'
import Link, { Props as LinkProps } from '@/components/link'
import * as gtag from '@/lib/gtag'
import type { FunctionComponent, MDXComponents } from 'mdx/types'
import type { AppProps } from 'next/app'
import type { VFC } from 'react'

const mdxComponents: MDXComponents = {
  a: Link as FunctionComponent<LinkProps>
}

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  const handleRouterChangeComplete = useCallback((url: string) => {
    gtag.pageview(url)
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouterChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', handleRouterChangeComplete)
    }
  }, [router.events, handleRouterChangeComplete])

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

      {gtag.GA_TRACKING_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: dedent`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}');
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
