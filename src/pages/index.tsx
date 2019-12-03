import Head from 'next/head'
import React from 'react'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  title: {
    defaultMessage: 'Inaba Jinja',
    id: 'app.title'
  }
})

export default () => {
  const intl = useIntl()

  return (
    <>
      <Head>
        <title>{intl.formatMessage(messages.title)}</title>
      </Head>
    </>
  )
}
