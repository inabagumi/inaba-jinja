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

const Root = styled.header`
  margin: 0 auto;
  max-width: 100%;
  width: 800px;
`

const Header: FC = () => (
  <Root>
    <Link href="/" passHref prefetch={false}>
      <Brand>
        <Logo aria-label="因幡神社" />
      </Brand>
    </Link>
  </Root>
)

export default Header
