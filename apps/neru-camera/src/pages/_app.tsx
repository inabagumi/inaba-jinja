import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import type { VFC } from 'react'

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
              height: 630,
              url: `${baseURL}/img/main-visual.jpg`,
              width: 1200
            }
          ],
          type: 'website'
        }}
        titleTemplate={title && `%s - ${title}`}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
