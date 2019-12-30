import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import SiteMetadata from '../../../types/SiteMetadata'
import BaseLogo from '../../atoms/Logo'
import Layout from '../../templates/Layout'

const Content = styled('main')``

const Description = styled('p')`
  font-family: var(--ij-serif-font-family);
  font-size: 0.95rem;
  letter-spacing: 0.3rem;
  margin: 1rem 0 0;
  padding: 0;
`

const Header = styled('header')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  max-width: 620px;
`

const Logo = styled(BaseLogo)`
  height: auto;
  width: 4rem;
`

const Title = styled('h1')`
  margin: 0;
  padding: 0;
`

const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

type TData = {
  site: {
    siteMetadata: SiteMetadata
  }
}

const Home: FC = () => {
  const { site } = useStaticQuery<TData>(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Wrapper>
        <Header>
          <Title>
            <Logo aria-label="因幡神社" />
          </Title>

          <Description>{site.siteMetadata.description}</Description>
        </Header>

        <Content />
      </Wrapper>
    </Layout>
  )
}

export default Home
