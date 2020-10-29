import type { AppProps } from 'next/app'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import { useCallback, useEffect } from 'react'
import type { FC } from 'react'

import NProgress from '@/components/nprogress'
import fullPath from '@/helpers/fullPath'

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => {
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
      <DefaultSeo
        openGraph={{
          type: 'article'
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@Inaba_Jinja'
        }}
        titleTemplate="%s - 因幡神社"
      />

      <LogoJsonLd
        logo={fullPath('/images/favicon-192x192.png')}
        url={fullPath('/')}
      />

      <Component {...pageProps} />

      <NProgress />
    </>
  )
}

export default MyApp
