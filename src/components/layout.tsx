import Image from 'next/image'
import type { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import {
  preSrc as mainVisualPlaceholder,
  src as mainVisualURL
} from '@/assets/main-visual.jpg'
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

const Background = styled.div`
  height: 100vh;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: -1;

  ::before,
  ::after {
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  ::before {
    background-image: url('${mainVisualPlaceholder}');
    background-size: cover;
  }

  ::after {
    background-color: rgba(0, 0, 0, 0.54);
  }

  img {
    object-fit: cover;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
`

type Props = {
  hideHeader?: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false }) => (
  <>
    <GlobalStyle />

    <SkipNavLink>コンテンツにスキップ</SkipNavLink>

    <Background aria-hidden="true">
      <Image alt="" layout="fill" priority src={mainVisualURL} />
    </Background>

    <Wrapper>
      {!hideHeader && <Header />}

      {children}
    </Wrapper>

    <Footer />
  </>
)

export default Layout
