import styled from '@emotion/styled'
import React, { FC } from 'react'
import lqipMainVisual from '../../../assets/main-visual@lqip.jpg'
import horizontalLqipMainVisual from '../../../assets/horizontal-main-visual@lqip.jpg'
import horizontalMainVisual from '../../../assets/horizontal-main-visual.jpg'
import horizontalMainVisual2x from '../../../assets/horizontal-main-visual@2x.jpg'
import horizontalWebpMainVisual from '../../../assets/horizontal-main-visual.webp'
import horizontalWebpMainVisual2x from '../../../assets/horizontal-main-visual@2x.webp'
import mainVisual from '../../../assets/main-visual.jpg'
import mainVisual2x from '../../../assets/main-visual@2x.jpg'
import webpMainVisual from '../../../assets/main-visual.webp'
import webpMainVisual2x from '../../../assets/main-visual@2x.webp'
import Container from '../../atoms/Container'

const Content = styled(Container)`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding: 0 1rem;
  position: absolute;
  right: 0;
  top: 0;
`

const Cover = styled('div')`
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
    background-image: url("${horizontalLqipMainVisual}");
  }

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

const CoverImage = styled('picture')`
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

const Root = styled('div')`
  --hero-overlay-color: rgba(0, 0, 0, 0.54);

  background-color: var(--hero-overlay-color);
  color: #fff;
  min-height: 80vh;
  position: relative;

  @media (min-width: 960px) {
    & {
      min-height: 100vh;
    }
  }
`

const Hero: FC = ({ children }) => {
  return (
    <Root>
      <Cover>
        <CoverImage>
          <source
            srcSet={`${horizontalWebpMainVisual} 1x, ${horizontalWebpMainVisual2x} 2x`}
            media="(orientation: portrait)"
            type="image/webp"
          />
          <source
            srcSet={`${webpMainVisual} 1x, ${webpMainVisual2x} 2x`}
            type="image/webp"
          />
          <source
            media="(orientation: portrait)"
            src={`${horizontalMainVisual} 1x, ${horizontalMainVisual2x} 2x`}
            type="image/png"
          />

          <img
            alt=""
            className="cover__image"
            height="600"
            role="presentation"
            src={mainVisual}
            srcSet={`${mainVisual} 1x, ${mainVisual2x} 2x`}
            width="800"
          />
        </CoverImage>
      </Cover>

      <Content>{children}</Content>
    </Root>
  )
}

export default Hero
