import { NextPage } from 'next'
import React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Meta from '../components/atoms/Meta'
import Home from '../components/pages/Home'

const messages = defineMessages({
  description: {
    defaultMessage:
      '因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。',
    id: 'home.description'
  },
  title: {
    defaultMessage: '因幡神社',
    id: 'app.title'
  }
})

const Index: NextPage = () => {
  const intl = useIntl()

  return (
    <>
      <Meta
        description={intl.formatMessage(messages.description)}
        title={intl.formatMessage(messages.title)}
      />

      <Home />
    </>
  )
}

export default Index
