import { NextSeo } from 'next-seo'
import React, { FC } from 'react'
import { homepage as siteUrl } from '../../package.json'
import cardImage from '../assets/card.jpg'
import Home from '../components/pages/Home'

const description =
  '因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。'

const HomePage: FC = () => (
  <>
    <NextSeo
      canonical={new URL('/', siteUrl).toString()}
      description={description}
      openGraph={{
        images: [
          {
            url: new URL(cardImage, siteUrl).toString()
          }
        ]
      }}
      title="因幡神社"
      titleTemplate={undefined}
    />

    <Home />
  </>
)

export default HomePage
