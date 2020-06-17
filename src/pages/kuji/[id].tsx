import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import React from 'react'

import Fortune from '@/components/pages/Fortune'
import getFortune from '@/contentful/getFortune'
import getFortunes from '@/contentful/getFortunes'
import fullPath from '@/helpers/fullPath'
import NotFound from '@/pages/404.mdx'
import FortuneEntry from '@/types/FortuneEntry'

export type Params = {
  id: string
}

export type Props = {
  fortune?: FortuneEntry
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}) => {
  if (!params?.id) throw new TypeError('ID is required.')

  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const fortune = await getFortune(id).catch(() => undefined)

  return {
    props: {
      fortune
    }
  }
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const ids = await getFortunes().catch((): string[] => [])
  const paths = ids.map((id) => ({
    params: {
      id
    }
  }))

  return {
    fallback: false,
    paths
  }
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  if (!fortune) return <NotFound />

  const name = `第${fortune.fields.number}番『${fortune.fields.blessing}』`
  const title = `因幡はねるくじ ${name}`

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

      <BreadcrumbJsonLd
        itemListElements={[
          {
            item: fullPath('/lottery'),
            name: 'ねるくじ',
            position: 1
          },
          {
            item: fullPath(`/kuji/${fortune.sys.id}`),
            name,
            position: 2
          }
        ]}
      />

      <Fortune fortune={fortune} />
    </>
  )
}

export default KujiPage
