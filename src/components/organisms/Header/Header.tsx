import styled from '@emotion/styled'
import React, { FC } from 'react'
import Link from '../../atoms/Link'
import Logo from '../../atoms/Logo'

const Brand = styled(Link)`
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
    <Brand href="/" prefetch={false}>
      <Logo aria-label="因幡神社" />
    </Brand>
  </Root>
)

export default Header
