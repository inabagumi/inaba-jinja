import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { homepage as siteUrl } from '../../../package.json'
import Fortune from '../../components/pages/Fortune'
import getFortune from '../../contentful/getFortune'
import getFortunes from '../../contentful/getFortunes'
import FortuneEntry from '../../types/FortuneEntry'
import Error from '../_error'

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
}

export async function unstable_getStaticProps({
  params
}: StaticParams): Promise<StaticProps> {
  const fortune = await getFortune(params.id).catch(() => undefined)

  return { props: { fortune } }
}

export async function unstable_getStaticPaths(): Promise<string[]> {
  const ids = await getFortunes().catch((): string[] => [])

  return ids.map(id => `/kuji/${id}`)
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  if (!fortune) return <Error statusCode={404} />

  return (
    <>
      <NextSeo
        canonical={new URL(`/kuji/${fortune.sys.id}`, siteUrl).toString()}
        description={fortune.fields.description}
        openGraph={{
          images: [
            {
              url: new URL(
                fortune.fields.card.fields.file.url,
                siteUrl
              ).toString()
            }
          ]
        }}
        title={`${fortune.fields.blessing} - 因幡はねるくじ`}
        titleTemplate={undefined}
      />

      <Fortune fortune={fortune} />
    </>
  )
}

export default KujiPage
