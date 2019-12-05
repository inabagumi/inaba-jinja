import Container from '@material-ui/core/Container'
import Zoom from '@material-ui/core/Zoom'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import Logo from '../components/atoms/Logo'
import Page from '../layouts/Main'

const messages = defineMessages({
  title: {
    defaultMessage: 'Inaba Jinja',
    id: 'app.title'
  }
})

const useStyles = makeStyles(theme => {
  const backgroundColor = 'rgba(0, 0, 0, 0.54)'

  return createStyles({
    firstSection: {
      backgroundColor: theme.palette.secondary[100],
      color: theme.palette.getContrastText(theme.palette.secondary[100]),
      padding: theme.spacing(10, 0)
    },
    firstSectionParagraph: {
      fontFamily: 'Roboto, Helvetica, Arial, Noto Serif JP, serif'
    },
    hero: {
      alignItems: 'center',
      backgroundColor,
      backgroundImage: 'url("/images/hero.jpg")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative',
      '&::before': {
        bottom: 0,
        content: '""',
        backgroundColor,
        display: 'block',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
      }
    },
    heroContent: {
      position: 'relative'
    },
    logo: {
      color: 'rgba(255, 255, 255, 0.87)',
      height: '250px',
      maxWidth: '80vh',
      width: 'auto'
    }
  })
})

const Home: NextPage = () => {
  const intl = useIntl()
  const classes = useStyles({})

  return (
    <>
      <Head>
        <title>{intl.formatMessage(messages.title)}</title>
      </Head>

      <Page>
        <div className={classes.hero}>
          <div className={classes.heroContent}>
            <Zoom in>
              <Logo
                aria-label={intl.formatMessage(messages.title)}
                className={classes.logo}
              />
            </Zoom>
          </div>
        </div>

        <main>
          <section className={classes.firstSection}>
            <Container maxWidth="md">
              <Typography
                className={classes.firstSectionParagraph}
                color="inherit"
              >
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
