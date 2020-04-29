import { NextSeo } from 'next-seo'
import React, { FC } from 'react'
import cardImage from 'assets/card.jpg'
import Home from 'components/pages/Home'
import fullPath from 'helpers/fullPath'

const description =
  '因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。'

const HomePage: FC = () => (
  <>
    <NextSeo
      canonical={fullPath('/')}
      description={description}
      openGraph={{
        images: [
          {
            height: 630,
            url: fullPath(cardImage.src),
            width: 1200
          }
        ],
        type: 'website'
      }}
      title="因幡神社"
      titleTemplate="%s"
    />

    <Home />
  </>
)

export default HomePage
