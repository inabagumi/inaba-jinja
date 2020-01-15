import { NextPage } from 'next'
import Error, { ErrorProps } from 'next/error'
import Head from 'next/head'
import React from 'react'
import SingleDoc from '../components/templates/SingleDoc'

const MyError: NextPage<ErrorProps> = ({ statusCode }) => {
  const title = statusCode === 404 ? 'ページが見つかりません' : '内部エラー'
  const message =
    statusCode === 404
      ? '申し訳ありませんがお探しのページを見つけられませんでした。'
      : '内部的になんらかのエラーが発生したためページを表示することができません。しばらく時間を開けてから再度お越しください。'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <SingleDoc title={title}>
        <p className="message">{message}</p>
      </SingleDoc>

      <style jsx>{`
        .message {
          margin: 0;
        }
      `}</style>
    </>
  )
}

MyError.getInitialProps = async ({
  err,
  res,
  ...props
}): Promise<ErrorProps> => {
  if (res?.statusCode === 404) return { statusCode: 404 }

  return Error.getInitialProps({ err, res, ...props })
}

export default MyError
