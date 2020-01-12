import React, { FC } from 'react'
import Meta from '../components/atoms/Meta'
import Privacy from '../components/pages/Privacy'

const PrivacyPage: FC = () => {
  return (
    <>
      <Meta pathname="/privacy" title="プライバシーポリシー - 因幡神社" />

      <Privacy />
    </>
  )
}

export default PrivacyPage
