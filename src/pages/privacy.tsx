import { NextSeo } from 'next-seo'
import React, { FC } from 'react'
import Privacy from '../components/pages/Privacy'
import fullPath from '../helpers/fullPath'

const PrivacyPage: FC = () => {
  return (
    <>
      <NextSeo canonical={fullPath('/privacy')} title="プライバシーポリシー" />

      <Privacy />
    </>
  )
}

export default PrivacyPage
