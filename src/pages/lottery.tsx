import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { homepage as siteUrl } from '../../package.json'
import Lottery from '../components/pages/Lottery'
import getFortunes from '../contentful/getFortunes'
import Error from './_error'

type Props = {
  id?: string
}

const LotteryPage: NextPage<Props> = ({ id }) => {
  if (!id) return <Error statusCode={500} />

  return (
    <>
      <Head>
        <meta content="noarchive, noindex" name="robots" />
        <title>おみくじを引いています...</title>

        <noscript>
          <meta content={`2;URL=${siteUrl}/kuji/${id}`} httpEquiv="refresh" />
        </noscript>
      </Head>

      <Lottery id={id} />
    </>
  )
}

LotteryPage.getInitialProps = async (): Promise<Props> => {
  const ids = await getFortunes().catch((): string[] => [])
  const id = ids[Math.floor(Math.random() * ids.length)]

  return { id }
}

export default LotteryPage
