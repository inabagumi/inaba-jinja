import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 0.5rem;
`

const Content = styled.main`
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

type Props = {
  title?: string
}

const SimpleWindow: FC<Props> = ({ children, title }) => {
  return (
    <Wrapper>
      <Content>
        {title && <Title>{title}</Title>}

        {children}
      </Content>
    </Wrapper>
  )
}

export default SimpleWindow
