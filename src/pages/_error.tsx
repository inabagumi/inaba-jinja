import Head from 'next/head'
import React, { FC } from 'react'
import Layout from '../components/templates/Layout'

const Error: FC = () => {
  return (
    <>
      <Head>
        <title>ページが見つかりません</title>
      </Head>

      <Layout>
        <h1>ページが見つかりません</h1>

        <p>申し訳ありませんがお探しのページを見つけられませんでした。</p>
      </Layout>
    </>
  )
}

export default Error
