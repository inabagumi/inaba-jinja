import Head from 'next/head'
import React, { FC } from 'react'
import SingleDoc from '../components/templates/SingleDoc'

const Error: FC = () => {
  const title = 'ページが見つかりません'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <SingleDoc title={title}>
        <p className="message">
          申し訳ありませんがお探しのページを見つけられませんでした。
        </p>
      </SingleDoc>

      <style jsx>{`
        .message {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Error
