import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import KeyboardArrowDown from '../../../assets/icons/keyboard_arrow_down.svg'
import SiteMetadata from '../../../types/SiteMetadata'
import MainVisual from '../../molecules/MainVisual'
import Layout from '../../templates/Layout'

const Content = styled('main')`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 10rem;
  font-weight: 900;
  justify-content: center;
  min-height: 100vh;
`

const Description = styled('p')`
  font-family: var(--ij-serif-font-family);
  font-size: 1rem;
  letter-spacing: 0.2rem;
  margin: 0;
  height: 30em;
  padding: 1em 0;
  writing-mode: vertical-rl;
`

const ScrollDown = styled('div')`
  margin-bottom: 3rem;
`

const ScrollDownButton = styled(ScrollLink)`
  color: inherit;
  display: none;
  text-decoration: none;

  @media (min-width: 960px) {
    & {
      display: block;
    }
  }
`

const ScrollDownIcon = styled(KeyboardArrowDown)`
  display: inline-block;
  fill: currentColor;
  font-size: 3rem;
  height: 1em;
  vertical-align: middle;
  width: 1em;
`

const TextBox = styled('div')`
  align-items: center;
  display: flex;
  flex-grow: 1;
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
      <MainVisual>
        <TextBox>
          <Description>{site.siteMetadata.description}</Description>
        </TextBox>

        <ScrollDown>
          <ScrollDownButton
            aria-label="コンテンツまでスクロール"
            href="#content"
            role="button"
            smooth
            to="content"
          >
            <ScrollDownIcon xmlns={undefined} />
          </ScrollDownButton>
        </ScrollDown>
      </MainVisual>

      <Content id="content">stub</Content>
    </Layout>
  )
}

export default Home
