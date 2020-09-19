import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'

import fullPath from '@/helpers/fullPath'
import { Props as KujiProps } from '@/pages/kuji/[id]'

export { getStaticPaths, getStaticProps } from '@/pages/kuji/[id]'

const SharePage: NextPage<KujiProps> = ({ fortune }) => {
  const router = useRouter()

  useEffect(() => {
    void router.prefetch('/')

    requestAnimationFrame(() => {
      void router.replace('/')
    })
  }, [router])

  if (!fortune) return null

  const title = `因幡はねるくじ 第${fortune.fields.number}番『${fortune.fields.blessing}』`

  return (
    <>
      <NextSeo
        canonical={fullPath(`/kuji/${fortune.sys.id}`)}
        description={fortune.fields.description}
        openGraph={{
          images: [
            {
              height: 630,
              url: fullPath(fortune.fields.card.fields.file.url),
              width: 1200
            }
          ],
          title
        }}
        title={title}
      />

      <Head>
        <noscript>
          <meta content={`0;URL=${fullPath('/')}`} httpEquiv="refresh" />
        </noscript>
      </Head>
    </>
  )
}

export default SharePage
