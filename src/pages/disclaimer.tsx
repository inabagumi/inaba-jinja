import React, { FC } from 'react'
import Meta from '../components/atoms/Meta'
import Disclaimer from '../components/pages/Disclaimer'

const DisclaimerPage: FC = () => {
  return (
    <>
      <Meta pathname="/disclaimer" title="免責事項 - 因幡神社" />

      <Disclaimer />
    </>
  )
}

export default DisclaimerPage
