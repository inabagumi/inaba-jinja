import React, { FC } from 'react'
import cardImage from '../assets/card.jpg'
import Meta from '../components/atoms/Meta'
import Home from '../components/pages/Home'

const HomePage: FC = () => {
  return (
    <>
      <Meta image={cardImage} pathname="/" title="因幡神社" />

      <Home />
    </>
  )
}

export default HomePage
