import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import Head from 'next/head'
import React, { FC } from 'react'
import {
  preSrc as placeholder,
  src as defaultMainVisual
} from 'assets/main-visual.jpg'
import Footer from 'components/organisms/Footer'

const mainVisual = process.env.INABA_JINJA_MAIN_VISUAL_URL ?? defaultMainVisual

const globalStyles = css`
  html {
    background-color: #757575;
    color: #fafafa;
  }

  body::before {
    background-image:
      linear-gradient(
        rgba(0, 0, 0, 0.54),
        rgba(0, 0, 0, 0.54)
      ),
      url('${mainVisual}?auto=compress,format'),
      url('${mainVisual}?auto=compress,format&w=10');
    background-image:
      linear-gradient(
        rgba(0, 0, 0, 0.54),
        rgba(0, 0, 0, 0.54)
      ),
      image-set(
        url('${mainVisual}?auto=compress,format&w=0.5') 1x,
        url('${mainVisual}?auto=compress,format') 2x
      ),
      url('${placeholder}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: -1;
  }

  @media (orientation: portrait) {
    body::before {
      background-image:
        linear-gradient(
          rgba(0, 0, 0, 0.54),
          rgba(0, 0, 0, 0.54)
        ),
        url('${mainVisual}?ar=0.8:1&auto=compress,format&fit=crop'),
        url('${mainVisual}?ar=0.8:1&auto=compress,format&w=10&fit=crop');
      background-image:
        linear-gradient(
          rgba(0, 0, 0, 0.54),
          rgba(0, 0, 0, 0.54)
        ),
        image-set(
          url('${mainVisual}?ar=0.8:1&auto=compress,format&fit=crop&w=0.5') 1x,
          url('${mainVisual}?ar=0.8:1&auto=compress,format&fit=crop') 2x
        ),
        url('${placeholder}');
    }
  }

  a {
    color: #f57f17;
  }

  a:hover {
    color: #ff6f00;
  }
`

const Content = styled.div`
  flex-grow: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 0;
`

const Layout: FC = ({ children }) => (
  <>
    <Head>
      <link
        as="image"
        href={`${mainVisual}?auto=compress,format`}
        media="(orientation: landscape) and (min-resolution: 1.1dppx)"
        rel="preload"
      />
      <link
        as="image"
        href={`${mainVisual}?auto=compress,format&w=0.5`}
        media="(orientation: landscape) and (max-resolution: 1dppx)"
        rel="preload"
      />
      <link
        as="image"
        href={`${mainVisual}?ar=0.8:1&auto=compress,format&fit=crop`}
        media="(orientation: portrait) and (min-resolution: 1.1dppx)"
        rel="preload"
      />
      <link
        as="image"
        href={`${mainVisual}?ar=0.8:1&auto=compress,format&fit=crop&w=2x`}
        media="(orientation: portrait) and (max-resolution: 1dppx)"
        rel="preload"
      />
    </Head>

    <Global styles={globalStyles} />

    <Wrapper>
      <Content>{children}</Content>

      <Footer />
    </Wrapper>
  </>
)

export default Layout
