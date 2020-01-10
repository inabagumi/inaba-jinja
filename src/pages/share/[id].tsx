import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Meta from '../../components/atoms/Meta'
import FortuneEntry from '../../types/FortuneEntry'
import KujiPage from '../kuji/[id]'
import { homepage as siteUrl } from '../../../package.json'

type Props = {
  fortune?: FortuneEntry
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

SharePage.getInitialProps = KujiPage.getInitialProps

export default SharePage
