import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import SiteMetadata from '../../../types/SiteMetadata'
import Container from '../../atoms/Container'
import Logo from '../../atoms/Logo'

const AppBar = styled('header')`
  background-color: #f5f5f5;
`

const BrandLink = styled(Link)`
  color: inherit;
  display: block;
`

const BrandLogo = styled(Logo)`
  height: 36px;
  max-height: 100%;
  width: auto;
`

const Content = styled(Container)`
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`

type TData = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const Header: FC = () => {
  const { site } = useStaticQuery<TData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <AppBar>
      <Content>
        <BrandLink to="/">
          <BrandLogo
            aria-label={site.siteMetadata.title}
            focusable="false"
            role="img"
            xmlns={undefined}
          />
        </BrandLink>
      </Content>
    </AppBar>
  )
}

export default Header
