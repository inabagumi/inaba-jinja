import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'
import getFortune from '../../contentful/getFortune'
import getFortunes from '../../contentful/getFortunes'
import fullPath from '../../helpers/fullPath'
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

type StaticPaths = {
  paths: string[]
}

export async function unstable_getStaticPaths(): Promise<StaticPaths> {
  const ids = await getFortunes().catch((): string[] => [])

  return {
    paths: ids.map(id => `/share/${id}`)
  }
}

const SharePage: NextPage<Props> = ({ fortune }) => {
  const router = useRouter()

  useEffect(() => {
    requestAnimationFrame(() => {
      router.replace('/')
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
              url: fullPath(fortune.fields.card.fields.file.url)
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
