import React, { FC } from 'react'
import lqipMainVisual from '../../../assets/main-visual@lqip.jpg'
import verticalLqipMainVisual from '../../../assets/vertical-main-visual@lqip.jpg'
import verticalMainVisual from '../../../assets/vertical-main-visual.jpg'
import verticalMainVisual2x from '../../../assets/vertical-main-visual@2x.jpg'
import verticalWebpMainVisual from '../../../assets/vertical-main-visual.webp'
import verticalWebpMainVisual2x from '../../../assets/vertical-main-visual@2x.webp'
import mainVisual from '../../../assets/main-visual.jpg'
import mainVisual2x from '../../../assets/main-visual@2x.jpg'
import webpMainVisual from '../../../assets/main-visual.webp'
import webpMainVisual2x from '../../../assets/main-visual@2x.webp'
import styles from './Background.module.css'

const Background: FC = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.cover}>
          <picture>
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
              className={styles.cover__image}
              height="600"
              role="presentation"
              src={mainVisual}
              srcSet={`${mainVisual} 1x, ${mainVisual2x} 2x`}
              width="800"
            />
          </picture>
        </div>
      </div>

      <style jsx>{`
        .${styles.cover} {
          background-image: url("${lqipMainVisual}");
        }

        @media (orientation: portrait) {
          .${styles.cover} {
            background-image: url("${verticalLqipMainVisual}");
          }
        }
      `}</style>
    </>
  )
}

export default Background
