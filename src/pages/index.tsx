import React, { FC } from 'react'
import Meta from '../components/atoms/Meta'
import Home from '../components/pages/Home'

const HomePage: FC = () => {
  return (
    <>
      <Meta pathname="/" title="因幡神社" />

      <Home />
    </>
  )
}

export default HomePage
