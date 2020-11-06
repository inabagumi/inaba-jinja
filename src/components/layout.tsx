import Image from 'next/image'
import type { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import {
  preSrc as mainVisualPlaceholder,
  src as mainVisualURL
} from '@/assets/main-visual.jpg'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { SkipNavContent, SkipNavLink } from '@/components/skip-nav'

const GlobalStyle = createGlobalStyle`
  :root {
    --ij-default-font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
      Helvetica, Arial, YuGothic, Yu Gothic, sans-serif;
    --ij-serif-font-family: Garamond, Times New Roman, YuMincho, Yu Mincho,
      serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    background-color: #757575;
    box-sizing: border-box;
    color: #fff;
    font-family: var(--ij-default-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 2;
    -webkit-text-size-adjust: none;
  }

  body {
    margin: 0;
  }

  a {
    color: #f57f17;
  }

  a:hover {
    color: #ff6f00;
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
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  z-index: 0;
`

const Content = styled.div`
  flex-grow: 1;
`

type Props = {
  hideHeader?: boolean
}

const Layout: FC<Props> = ({ children, hideHeader = false }) => (
  <>
    <GlobalStyle />

    <SkipNavLink>コンテンツにスキップ</SkipNavLink>

    <Background aria-hidden="true">
      <Image alt="" layout="fill" src={mainVisualURL} />
    </Background>

    <Wrapper>
      {!hideHeader && <Header />}

      <Content>
        {!hideHeader && <SkipNavContent />}

        {children}
      </Content>

      <Footer />
    </Wrapper>
  </>
)

export default Layout
