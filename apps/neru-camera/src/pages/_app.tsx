import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import type { VFC } from 'react'
import mainVisual from '../../public/img/main-visual.jpg'

const MyApp: VFC<AppProps> = ({ Component, pageProps }) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  const title = process.env.NEXT_PUBLIC_TITLE
  const description = process.env.NEXT_PUBLIC_DESCRIPTION

  return (
    <>
      <DefaultSeo
        defaultTitle={title}
        description={description}
        openGraph={{
          images: [
            {
              height: mainVisual.height,
              url: new URL(mainVisual.src, baseURL).toString(),
              width: mainVisual.width
            }
          ],
          type: 'website'
        }}
        titleTemplate={title && `%s - ${title}`}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />

      <Head>
        <link href="/manifest.json" rel="manifest" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
