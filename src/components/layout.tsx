import type { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Background from '@/components/background'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { SkipNavLink } from '@/components/skip-nav'

const GlobalStyle = createGlobalStyle`
  :root {
    --ij-color-primary: #f57f17;

    --ij-font-family-base: -apple-system, BlinkMacSystemFont, Helvetica Neue,
      Helvetica, Arial, YuGothic, Yu Gothic, sans-serif;
    --ij-font-family-serif: Garamond, Times New Roman, YuMincho, Yu Mincho,
      serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    color: inherit;
  }

  html {
    background-color: #757575;
    box-sizing: border-box;
    color: #fff;
    font-family: var(--ij-font-family-base, sans-serif);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 2;
    -webkit-text-size-adjust: none;
  }

  body {
    margin: 0;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
`

type Props = {
  hideHeader?: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false }) => {
  return (
    <>
      <GlobalStyle />

      <SkipNavLink>コンテンツにスキップ</SkipNavLink>

      <Background />

      <Wrapper>
        {!hideHeader && <Header />}

        {children}
      </Wrapper>

      <Footer />
    </>
  )
}

export default Layout
