import styled from '@emotion/styled'
import Head from 'next/head'
import * as React from 'react'
import Page from '../components/page'

const Hero = styled.div`
  align-items: center;
  background-color: #222;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  font-family: Roboto Slab, serif;
  font-size: 1.5rem;
  font-weight: 700;
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
`

const Index: React.FunctionComponent = (): React.ReactElement => (
  <Page>
    <Head>
      <link href="https://haneru.dev/" rel="canonical" />
      <meta content="" property="og:description" />
      <meta content="" property="og:image" />
      <meta content="website" property="og:type" />
      <meta content="Haneru Developers" property="og:title" />
      <meta content="https://haneru.dev/" property="og:url" />
      <meta content="" name="twitter:card" />
      <meta content="" name="twitter:description" />
      <meta content="" name="twitter:image" />
      <meta content="Haneru Developers" name="twitter:title" />
      <link
        as="style"
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:700"
        rel="stylesheet"
      />
    </Head>

    <main>
      <Hero>
        <Title>Haneru Developers</Title>
      </Hero>
    </main>
  </Page>
)

export default Index
