import React, { FC } from 'react'
import Meta from '../components/atoms/Meta'
import ActualPrivacy from '../components/pages/Privacy'

const Privacy: FC = () => {
  return (
    <>
      <Meta pathname="/privacy" title="プライバシーポリシー" />

      <ActualPrivacy />
    </>
  )
}

export default Privacy
