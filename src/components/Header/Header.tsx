import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'

import BaseLogo from '@/assets/logo.svg'

const Logo = styled(BaseLogo)`
  display: inline-block;
  fill: currentColor;
  height: 1em;
  line-height: 1;
  vertical-align: middle;
  width: auto;
`

const Container = styled.header`
  margin: 0 auto;
  max-width: 100%;
  width: 800px;
`

const Brand = styled.a`
  color: inherit;
  font-size: 2rem;

  :hover {
    color: inherit;
  }
`

const Header: FC = () => (
  <Container>
    <Link href="/" passHref prefetch={false}>
      <Brand>
        <Logo aria-label="因幡神社" />
      </Brand>
    </Link>
  </Container>
)

export default Header
