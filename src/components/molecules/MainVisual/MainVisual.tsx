import clsx from 'clsx'
import Head from 'next/head'
import React, { FC } from 'react'
import mainVisual from '../../../images/main-visual.jpg'
import webpMainVisual from '../../../images/main-visual.webp'
import lqipMainVisual from '../../../images/main-visual@lqip.jpg'

type Props = {
  className?: string
}

const Hero: FC<Props> = ({ children, className }) => {
  return (
    <>
      <Head>
        <link
          as="image"
          href={webpMainVisual}
          rel="preload"
          type="image/webp"
        />
      </Head>

      <div className={clsx('hero', className)}>
        <div className="cover">
          <picture>
            <source srcSet={webpMainVisual} type="image/webp" />

            <img
              alt=""
              className="cover__image"
              height="600"
              role="presentation"
              src={mainVisual}
              width="800"
            />
          </picture>
        </div>

        <div className="hero__content">{children}</div>
      </div>

      <style jsx>{`
        .cover {
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
        }

        .cover::after {
          background-color: var(--hero-overlay-color);
          bottom: 0;
          content: '';
          display: block;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        }

        .cover__image {
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

        .hero {
          --hero-overlay-color: rgba(0, 0, 0, 0.54);

          background-color:  var(--hero-overlay-color);
          color: #fff;
          min-height: 80vh;
          position: relative;
        }

        @media (min-width: 960px) {
          .hero {
            min-height: 100vh;
          }
        }

        .hero__content {
          align-items: center;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          left: 0;
          margin: 0 auto;
          max-width: 1280px;
          padding: 0 1rem;
          position: absolute;
          right: 0;
          top: 0;
        }
      `}</style>
    </>
  )
}

export default Hero
