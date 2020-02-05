import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'
import Lottery from '../components/pages/Lottery'
import getFortunes from '../contentful/getFortunes'
import fullPath from '../helpers/fullPath'
import Error from './_error'

const DELAY_SECONDS = 2

type Props = {
  id?: string
}

const LotteryPage: NextPage<Props> = ({ id }) => {
  const router = useRouter()

  useEffect(() => {
    if (!id) return

    const timeoutId = setTimeout(() => {
      router.replace('/kuji/[id]', `/kuji/${id}`)
    }, 1000 * DELAY_SECONDS)

    return (): void => {
      clearTimeout(timeoutId)
    }
  }, [id, router])

  if (!id) return <Error statusCode={500} />

  return (
    <>
      <NextSeo noindex title="おみくじを引いています..." />

      <Head>
        <noscript>
          <meta
            content={`${DELAY_SECONDS};URL=${fullPath(`/kuji/${id}`)}`}
            httpEquiv="refresh"
          />
        </noscript>
      </Head>

      <Lottery />
    </>
  )
}

LotteryPage.getInitialProps = async (): Promise<Props> => {
  const ids = await getFortunes().catch((): string[] => [])
  const id = ids[Math.floor(Math.random() * ids.length)]

  return { id }
}

export default LotteryPage
