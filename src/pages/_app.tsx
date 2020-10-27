import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import type { FC } from 'react'

import NProgress from '@/components/nprogress'
import fullPath from '@/helpers/fullPath'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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
