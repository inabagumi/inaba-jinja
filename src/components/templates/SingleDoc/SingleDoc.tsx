import styled from '@emotion/styled'
import Link from 'next/link'
import React, { FC } from 'react'
import Logo from '../../atoms/Logo'

const Brand = styled.a`
  color: inherit;
  font-size: 2rem;

  &:hover {
    color: inherit;
  }
`

const Content = styled.div`
  background-color: rgba(38, 50, 56, 0.7);
  border-radius: 1rem;
  margin: 1rem auto;
  min-height: 70vh;
  max-width: 100%;
  padding: 1rem 1rem 2rem;
  width: 800px;
`

const Header = styled.header`
  margin: 0 auto;
  max-width: 100%;
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
    <Header>
      <Link href="/" passHref prefetch={false}>
        <Brand>
          <Logo aria-label="因幡神社" />
        </Brand>
      </Link>
    </Header>

    <Content>
      {title && <Title>{title}</Title>}

      {children}
    </Content>
  </Wrapper>
)

export default SingleDoc
