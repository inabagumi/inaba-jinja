import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Head from 'next/head'
import React, { FC } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Page from '../layouts/Main'

const messages = defineMessages({
  title: {
    defaultMessage: 'Inaba Jinja',
    id: 'app.title'
  }
})

const Home: FC = () => {
  const intl = useIntl()

  return (
    <>
      <Head>
        <title>{intl.formatMessage(messages.title)}</title>
      </Head>

      <Page>
        <Container maxWidth="md">
          <Typography variant="body1">home</Typography>
        </Container>
      </Page>
    </>
  )
}

export default Home
