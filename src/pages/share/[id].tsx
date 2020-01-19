import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { homepage as siteUrl } from '../../../package.json'
import Meta from '../../components/atoms/Meta'
import getFortune from '../../contentful/getFortune'
import getFortunes from '../../contentful/getFortunes'
import FortuneEntry from '../../types/FortuneEntry'

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

  return ids.map(id => `/share/${id}`)
}

const SharePage: NextPage<Props> = ({ fortune }) => {
  const router = useRouter()

  useEffect(() => {
    requestAnimationFrame(() => {
      router.replace('/')
    })
  }, [router])

  if (!fortune) return null

  return (
    <>
      <Head>
        <noscript>
          <meta content={`0;URL=${siteUrl}/`} httpEquiv="refresh" />
        </noscript>
      </Head>

      <Meta
        description={fortune.fields.description}
        image={fortune.fields.card.fields.file.url}
        pathname={`/kuji/${fortune.sys.id}`}
        title={`${fortune.fields.blessing} - 因幡はねるくじ`}
      />
    </>
  )
}

export default SharePage
