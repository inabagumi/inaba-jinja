import React, { FC } from 'react'
import cardImage from '../assets/card.jpg'
import Meta from '../components/atoms/Meta'
import Home from '../components/pages/Home'

const HomePage: FC = () => {
  return (
    <>
      <Meta
        description="因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。"
        image={cardImage}
        pathname="/"
        title="因幡神社"
      />

      <Home />
    </>
  )
}

export default HomePage
