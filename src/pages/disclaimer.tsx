import { NextSeo } from 'next-seo'
import React, { FC } from 'react'
import Disclaimer from '../components/pages/Disclaimer'
import fullPath from '../helpers/fullPath'

const DisclaimerPage: FC = () => {
  return (
    <>
      <NextSeo canonical={fullPath('/disclaimer')} title="免責事項" />

      <Disclaimer />
    </>
  )
}

export default DisclaimerPage
