import { NextSeo } from 'next-seo'
import React, { FC } from 'react'
import { homepage as siteUrl } from '../../package.json'
import Privacy from '../components/pages/Privacy'

const PrivacyPage: FC = () => {
  return (
    <>
      <NextSeo
        canonical={new URL('/privacy', siteUrl).toString()}
        title="プライバシーポリシー"
      />

      <Privacy />
    </>
  )
}

export default PrivacyPage
