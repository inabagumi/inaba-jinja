import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import Hero from '../components/molecules/Hero'
import Page from '../layouts/Main'

const messages = defineMessages({
  description: {
    defaultMessage: '',
    id: 'home.description'
  },
  title: {
    defaultMessage: 'Inaba Jinja',
    id: 'app.title'
  }
})

const useStyles = makeStyles(theme =>
  createStyles({
    firstSection: {
      backgroundColor: theme.palette.secondary[100],
      color: theme.palette.getContrastText(theme.palette.secondary[100]),
      padding: theme.spacing(10, 0)
    },
    fontSerif: {
      fontFamily: ['Roboto Slab', 'Noto Serif JP', 'serif'].join(',')
    }
  })
)

const Home: NextPage = () => {
  const intl = useIntl()
  const classes = useStyles({})

  return (
    <>
      <Head>
        <title>{intl.formatMessage(messages.title)}</title>
        <meta
          content={intl.formatMessage(messages.description)}
          name="description"
        />
      </Head>

      <Page hideHeader>
        <Hero />

        <main>
          <section className={classes.firstSection}>
            <Container maxWidth="md">
              <Typography className={classes.fontSerif} color="inherit">
                <FormattedMessage defaultMessage="" id="home.description" />
              </Typography>
            </Container>
          </section>
        </main>
      </Page>
    </>
  )
}

export default Home
