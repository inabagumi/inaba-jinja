import { NextPage } from 'next'
import React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Meta from '../components/atoms/Meta'
import ActualPrivacy from '../components/pages/Privacy'

const messages = defineMessages({
  title: {
    defaultMessage: 'プライバシーポリシー',
    id: 'privacy_policy.title'
  }
})

const Privacy: NextPage = () => {
  const intl = useIntl()

  return (
    <>
      <Meta title={intl.formatMessage(messages.title)} />

      <ActualPrivacy />
    </>
  )
}

export default Privacy
