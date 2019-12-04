import Container from '@material-ui/core/Container'
import Zoom from '@material-ui/core/Zoom'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import React, { FC } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Logo from '../components/atoms/Logo'
import Page from '../layouts/Main'

const messages = defineMessages({
  title: {
    defaultMessage: 'Inaba Jinja',
    id: 'app.title'
  }
})

const useStyles = makeStyles(() => {
  const backgroundColor = 'rgba(0, 0, 0, 0.54)'

  return createStyles({
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
      minHeight: '500px',
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
      height: 'auto',
      maxWidth: '100%',
      width: '400px'
    }
  })
})

const Home: FC = () => {
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

        <Container component="main" maxWidth="md">
          <Typography variant="body1">home</Typography>
        </Container>
      </Page>
    </>
  )
}

export default Home
