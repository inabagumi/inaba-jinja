import styled from '@emotion/styled'
import React, { FC } from 'react'
import Header from 'components/organisms/Header'

const Content = styled.div`
  background-color: rgba(38, 50, 56, 0.7);
  border-radius: 1rem;
  margin: 1rem auto;
  min-height: 70vh;
  max-width: 100%;
  padding: 1rem 1rem 2rem;
  width: 800px;
`

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1rem;
  padding: 1.5;
`

const Wrapper = styled.div`
  padding: 0 0.5rem;
`

type Props = {
  title?: string
}

const SingleDoc: FC<Props> = ({ children, title }) => (
  <Wrapper>
    <Header />

    <Content>
      {title && <Title>{title}</Title>}

      {children}
    </Content>
  </Wrapper>
)

export default SingleDoc
