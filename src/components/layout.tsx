import type { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import {
  preSrc as mainVisualPlaceholderForLandscape,
  src as mainVisualURLForLandscape
} from '@/assets/main-visual@landscape.jpg'
import {
  preSrc as mainVisualPlaceholder,
  src as mainVisualURL
} from '@/assets/main-visual@portrait.jpg'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { SkipNavContent, SkipNavLink } from '@/components/skip-nav'

const createMainVisualURL = (
  width: number,
  orientation: 'portrait' | 'landscape' = 'portrait'
): string =>
  `/_next/image?url=${encodeURIComponent(
    orientation === 'portrait' ? mainVisualURL : mainVisualURLForLandscape
  )}&q=80&w=${width || 1200}`

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
    background-attachment: fixed;
    background-color: #757575;
    background-image:
      linear-gradient(
        rgba(0, 0, 0, 0.54),
        rgba(0, 0, 0, 0.54)
      ),
      url('${createMainVisualURL(768)}'),
      url('${mainVisualPlaceholder}');
    background-image:
      linear-gradient(
        rgba(0, 0, 0, 0.54),
        rgba(0, 0, 0, 0.54)
      ),
      image-set(
        url('${createMainVisualURL(320)}') 1x,
        url('${createMainVisualURL(768)}') 2x,
      ),
      url('${mainVisualPlaceholder}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    color: #fff;
    font-family: var(--ij-default-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 2;
    -webkit-text-size-adjust: none;
  }

  @media (orientation: landscape) {
    html {
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)),
        url('${createMainVisualURL(768, 'landscape')}'),
        url('${mainVisualPlaceholderForLandscape}');
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)),
        image-set(
          url('${createMainVisualURL(320, 'landscape')}') 1x,
          url('${createMainVisualURL(768, 'landscape')}') 2x,
        ),
        url('${mainVisualPlaceholderForLandscape}');
    }
  }

  @media (min-width: 960px) {
    html {
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)),
        url('${createMainVisualURL(1200, 'landscape')}'),
        url('${mainVisualPlaceholderForLandscape}');
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)),
        image-set(
          url('${createMainVisualURL(768, 'landscape')}') 1x,
          url('${createMainVisualURL(1200, 'landscape')}') 2x,
        ),
        url('${mainVisualPlaceholderForLandscape}');
    }
  }

  @media (min-width: 960px) and (orientation: portrait) {
    html {
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)),
        url('${createMainVisualURL(1200)}'),
        url('${mainVisualPlaceholder}');
      background-image:
        linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)),
        image-set(
          url('${createMainVisualURL(768)}') 1x,
          url('${createMainVisualURL(1200)}') 2x,
        ),
        url('${mainVisualPlaceholder}');
    }
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
