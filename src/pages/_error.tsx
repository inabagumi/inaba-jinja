import { NextPage } from 'next'
import Error, { ErrorProps } from 'next/error'
import Head from 'next/head'
import React from 'react'
import SingleDoc from '../components/templates/SingleDoc'
import * as Sentry from '../sentry'

const MyError: NextPage<ErrorProps> = () => {
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

MyError.getInitialProps = async ({
  err,
  res,
  ...props
}): Promise<ErrorProps> => {
  if (res?.statusCode === 404) return { statusCode: 404 }

  if (err) Sentry.captureException(err)

  return Error.getInitialProps({ err, res, ...props })
}

export default MyError
