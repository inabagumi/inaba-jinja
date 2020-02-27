import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import Fortune from '../../components/pages/Fortune'
import getFortune from '../../contentful/getFortune'
import getFortunes from '../../contentful/getFortunes'
import fullPath from '../../helpers/fullPath'
import FortuneEntry from '../../types/FortuneEntry'
import Error from '../404.mdx'

type Props = {
  fortune?: FortuneEntry
}

type StaticParams = {
  params: {
    id: string
  }
}

type StaticProps = {
  props: Props
  revalidate?: number | boolean
}

export async function unstable_getStaticProps({
  params
}: StaticParams): Promise<StaticProps> {
  const fortune = await getFortune(params.id).catch(() => undefined)

  return {
    props: {
      fortune
    },
    revalidate: fortune ? false : 30
  }
}

type StaticPaths = {
  fallback: boolean
  paths: StaticParams[]
}

export async function unstable_getStaticPaths(): Promise<StaticPaths> {
  const ids = await getFortunes().catch((): string[] => [])

  return {
    fallback: false,
    paths: ids.map(id => ({ params: { id } }))
  }
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  if (!fortune) return <Error />

  const title = `因幡はねるくじ 第${fortune.fields.number}番『${fortune.fields.blessing}』`

  return (
    <>
      <NextSeo
        canonical={fullPath(`/kuji/${fortune.sys.id}`)}
        description={fortune.fields.description}
        openGraph={{
          images: [
            {
              url: fullPath(fortune.fields.card.fields.file.url)
            }
          ],
          title
        }}
        title={title}
      />

      <Fortune fortune={fortune} />
    </>
  )
}

export default KujiPage
