import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import mainVisual from '../../../assets/main-visual.jpg'
import webpMainVisual from '../../../assets/main-visual.webp'
import lqipMainVisual from '../../../assets/main-visual@lqip.jpg'
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
    <>
      <Helmet>
        <link
          as="image"
          href={webpMainVisual}
          rel="preload"
          type="image/webp"
        />
      </Helmet>

      <Root>
        <Cover>
          <CoverImage>
            <source srcSet={webpMainVisual} type="image/webp" />

            <img
              alt=""
              className="cover__image"
              height="600"
              role="presentation"
              src={mainVisual}
              width="800"
            />
          </CoverImage>
        </Cover>

        <Content>{children}</Content>
      </Root>
    </>
  )
}

export default Hero
