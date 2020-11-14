import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import type { FC } from 'react'

import 'styles/globals.css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const title = process.env.NEXT_PUBLIC_TITLE || ''
  const description = process.env.NEXT_PUBLIC_DESCRIPTION

  return (
    <>
      <DefaultSeo
        description={description}
        openGraph={{
          images: [
            {
              height: 630,
              url: new URL(
                '/img/main-visual.jpg',
                process.env.NEXT_PUBLIC_BASE_URL
              ).toString(),
              width: 1200
            }
          ],
          type: 'website'
        }}
        titleTemplate={`%s - ${title}`}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default App
