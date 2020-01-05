import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Lottery from '../components/pages/Lottery'

const LotteryPage: NextPage = () => (
  <>
    <Head>
      <meta content="noarchive, noindex" name="robots" />
      <title>くじを引く - 因幡神社</title>
    </Head>

    <Lottery />
  </>
)

export default LotteryPage
