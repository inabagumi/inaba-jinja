import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Page from '../layouts/Main'

const messages = defineMessages({
  errorMessage: {
    defaultMessage: '',
    id: 'error.message'
  },
  errorTitle: {
    defaultMessage: 'Error!',
    id: 'error.title'
  },
  notFoundMessage: {
    defaultMessage: '...',
    id: 'not_found.message'
  },
  notFoundTitle: {
    defaultMessage: 'Page Not Found',
    id: 'not_found.title'
  },
  title: {
    defaultMessage: 'Haneru Jinja',
    id: 'app.title'
  }
})

type Props = {
  statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  const intl = useIntl()

  const title =
    statusCode === 404
      ? intl.formatMessage(messages.notFoundTitle)
      : intl.formatMessage(messages.notFoundTitle)
  const message =
    statusCode === 404
      ? intl.formatMessage(messages.notFoundMessage)
      : intl.formatMessage(messages.notFoundMessage)

  return (
    <>
      <Head>
        <title>
          {title} - {intl.formatMessage(messages.title)}
        </title>
      </Head>

      <Page>
        <Container>
          <Typography variant="h5">{title}</Typography>

          <Typography paragraph>{message}</Typography>
        </Container>
      </Page>
    </>
  )
}

Error.getInitialProps = async ({ err, res }): Promise<Props> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default Error
