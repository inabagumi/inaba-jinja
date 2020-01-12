import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Lottery from '../components/pages/Lottery'

const LotteryPage: NextPage = () => (
  <>
    <Head>
      <meta content="noarchive, noindex" name="robots" />
      <title>おみくじを引いています...</title>
    </Head>

    <Lottery />
  </>
)

export default LotteryPage
