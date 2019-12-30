import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import BaseBackground from '../../molecules/Background'
import Footer from '../../organisms/Footer'

const globalStyles = css`
  :root {
    --ij-default-font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
      Helvetica, Arial, YuGothic, Yu Gothic, sans-serif;
    --ij-serif-font-family: Garamond, Times New Roman, YuMincho, Yu Mincho,
      serif;
  }

  html {
    box-sizing: border-box;
    font-family: var(--ij-default-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: none;
  }

  body {
    background-color: #424242;
    color: #fafafa;
    margin: 0;
    line-height: 2;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body,
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  a {
    color: #f57f17;
  }

  a:hover {
    color: #ff6f00;
  }
`

const Background = styled(BaseBackground)`
  left: 0;
  position: fixed;
  top: 0;
  z-index: -1;
`

const Content = styled('div')`
  flex-grow: 1;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 0;
`

const Layout: FC = ({ children }) => {
  return (
    <>
      <Helmet async={false} htmlAttributes={{ lang: 'ja' }} />

      <Global styles={globalStyles} />

      <Wrapper>
        <Content>{children}</Content>

        <Footer />
      </Wrapper>

      <Background />
    </>
  )
}

export default Layout
