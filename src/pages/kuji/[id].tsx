import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import Fortune from '../../components/pages/Fortune'
import getFortune from '../../contentful/getFortune'
import getFortunes from '../../contentful/getFortunes'
import fullPath from '../../helpers/fullPath'
import FortuneEntry from '../../types/FortuneEntry'
import Error from '../404.mdx'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) throw new TypeError('ID is required.')

  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const fortune = await getFortune(id).catch(() => undefined)

  return {
    props: {
      fortune
    },
    revalidate: fortune ? 31536000 : 30
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await getFortunes().catch((): string[] => [])
  const paths = ids.map(id => ({
    params: {
      id
    }
  }))

  return {
    fallback: false,
    paths
  }
}

type Props = {
  fortune?: FortuneEntry
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
