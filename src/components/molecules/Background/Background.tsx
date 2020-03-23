import styled from '@emotion/styled'
import Head from 'next/head'
import React, { FC } from 'react'
import lqipMainVisual from 'assets/main-visual@lqip.jpg'
import verticalLqipMainVisual from 'assets/vertical-main-visual@lqip.jpg'
import verticalMainVisual from 'assets/vertical-main-visual.jpg'
import verticalMainVisual2x from 'assets/vertical-main-visual@2x.jpg'
import verticalWebpMainVisual from 'assets/vertical-main-visual.webp'
import verticalWebpMainVisual2x from 'assets/vertical-main-visual@2x.webp'
import mainVisual from 'assets/main-visual.jpg'
import mainVisual2x from 'assets/main-visual@2x.jpg'
import webpMainVisual from 'assets/main-visual.webp'
import webpMainVisual2x from 'assets/main-visual@2x.webp'

const Cover = styled.picture`
  background-color: transparent;
  background-image: url("${lqipMainVisual}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (orientation: portrait) {
    & {
      background-image: url("${verticalLqipMainVisual}");
    }
  }

  img {
    bottom: 0;
    display: block;
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
`

const Root = styled.div`
  --hero-overlay-color: rgba(0, 0, 0, 0.54);

  background-color: var(--hero-overlay-color);
  color: #fff;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;

  &::after {
    background-color: var(--hero-overlay-color);
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const Background: FC = () => {
  return (
    <>
      <Head>
        <link
          as="image"
          href={verticalWebpMainVisual2x}
          media="(orientation: portrait) and (min-resolution: 1.1dppx)"
          rel="preload"
          type="image/webp"
        />
        <link
          as="image"
          href={verticalWebpMainVisual}
          media="(orientation: portrait) and (max-resolution: 1dppx)"
          rel="preload"
          type="image/webp"
        />
        <link
          as="image"
          href={webpMainVisual2x}
          media="(orientation: landscape) and (min-resolution: 1.1dppx)"
          rel="preload"
          type="image/webp"
        />
        <link
          as="image"
          href={webpMainVisual}
          media="(orientation: landscape) and (max-resolution: 1dppx)"
          rel="preload"
          type="image/webp"
        />
      </Head>

      <Root>
        <Cover>
          <source
            srcSet={`${verticalWebpMainVisual} 1x, ${verticalWebpMainVisual2x} 2x`}
            media="(orientation: portrait)"
            type="image/webp"
          />
          <source
            srcSet={`${webpMainVisual} 1x, ${webpMainVisual2x} 2x`}
            type="image/webp"
          />
          <source
            media="(orientation: portrait)"
            src={`${verticalMainVisual} 1x, ${verticalMainVisual2x} 2x`}
            type="image/png"
          />

          <img
            alt=""
            height="600"
            role="presentation"
            src={mainVisual}
            srcSet={`${mainVisual} 1x, ${mainVisual2x} 2x`}
            width="800"
          />
        </Cover>
      </Root>
    </>
  )
}

export default Background
