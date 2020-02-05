import { NextSeo } from 'next-seo'
import React, { FC } from 'react'
import { homepage as siteUrl } from '../../package.json'
import Disclaimer from '../components/pages/Disclaimer'

const DisclaimerPage: FC = () => {
  return (
    <>
      <NextSeo
        canonical={new URL('/disclaimer', siteUrl).toString()}
        title="免責事項"
      />

      <Disclaimer />
    </>
  )
}

export default DisclaimerPage
