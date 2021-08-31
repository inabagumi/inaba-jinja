import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { VFC } from 'react'
import { useCallback, useEffect } from 'react'

import appleTouchIcon from '@/assets/icons/apple-touch-icon.png'
import favicon192x192 from '@/assets/icons/favicon-192x192.png'
import favicon512x512 from '@/assets/icons/favicon-512x512.png'
import Background from '@/components/background'
import Loading from '@/components/loading'

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  const handleRouterChangeComplete = useCallback((url: string) => {
    const trackingID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

    if (!trackingID) return

    setTimeout(() => {
      gtag('config', trackingID, {
        page_location: url,
        page_title: document.title
      })
    }, 0)
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouterChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', handleRouterChangeComplete)
    }
  }, [router.events, handleRouterChangeComplete])

  return (
    <>
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

      <Component {...pageProps} />
      <Background />
      <Loading />
    </>
  )
}

export default MyApp
