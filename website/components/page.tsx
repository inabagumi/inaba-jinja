import { Global, css } from '@emotion/core'
import Head from 'next/head'
import * as React from 'react'

const globalStyle = css`
  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

const Page: React.FunctionComponent = ({ children }): React.ReactElement => (
  <>
    <Global styles={globalStyle} />
    <Head>
      <meta content="width=device-width" name="viewport" />
      <title>Haneru Developers</title>
      <link href="/static/favicon.png" rel="icon" />
    </Head>

    {children}
  </>
)

export default Page
