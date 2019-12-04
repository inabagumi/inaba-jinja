import Typography from '@material-ui/core/Typography'
import Head from 'next/head'
import React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Layout from '../components/templates/Layout'

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

      <Layout>
        <Typography variant="body1">home</Typography>
      </Layout>
    </>
  )
}
