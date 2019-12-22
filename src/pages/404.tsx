import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import Container from '../components/atoms/Container'
import Header from '../components/organisms/Header'
import Layout from '../components/templates/Layout'

const Message = styled('p')`
  margin: 1rem 0 0;
`

const Title = styled('h1')`
  font-size: 2rem;
  font-weight: 700;
`

const Error: FC = () => {
  return (
    <>
      <Helmet>
        <title>ページが見つかりません</title>
      </Helmet>

      <Layout>
        <Header />

        <Container>
          <Title>ページが見つかりません</Title>

          <Message>
            申し訳ありませんがお探しのページを見つけられませんでした。
          </Message>
        </Container>
      </Layout>
    </>
  )
}

export default Error
