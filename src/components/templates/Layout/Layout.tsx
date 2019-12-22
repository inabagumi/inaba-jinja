import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
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
  }

  body {
    margin: 0;
    line-height: 2;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`

const Content = styled('div')`
  flex-grow: 1;
`

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout: FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="ja" />

        <link href="https://www.google-analytics.com" rel="preconnect" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
      </Helmet>

      <Global styles={globalStyles} />

      <Wrapper>
        <Content>{children}</Content>

        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
