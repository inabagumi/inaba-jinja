import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import KeyboadArrowDown from '@material-ui/icons/KeyboardArrowDown'
import React, { FC } from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import { Link as ScrollLink } from 'react-scroll'
import Hero from '../../molecules/Hero'
import Footer from '../../organisms/Footer'

const messages = defineMessages({
  scrollDown: {
    defaultMessage: 'コンテンツまでスクロール',
    id: 'home.scroll_down'
  }
})

const useStyles = makeStyles(theme =>
  createStyles({
    description: {
      fontFamily: ['Roboto Slab', 'Noto Serif JP', 'serif'].join(','),
      letterSpacing: '0.2em',
      margin: theme.spacing(0),
      maxHeight: '30em',
      padding: theme.spacing(2, 0),
      writingMode: 'vertical-rl'
    },
    heroContent: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
    heroText: {
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center'
    },
    scrollDown: {
      display: 'none',
      marginBottom: theme.spacing(10),

      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    }
  })
)

const Home: FC = () => {
  const intl = useIntl()
  const classes = useStyles({})

  return (
    <>
      <Hero>
        <Container className={classes.heroContent} maxWidth="lg">
          <div className={classes.heroText}>
            <Typography
              className={classes.description}
              color="inherit"
              paragraph
              variant="body1"
            >
              <FormattedMessage
                defaultMessage="因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。"
                id="home.description"
              />
            </Typography>
          </div>

          <Link
            aria-label={intl.formatMessage(messages.scrollDown)}
            className={classes.scrollDown}
            color="inherit"
            component={ScrollLink}
            href="#content"
            role="button"
            smooth
            to="contents"
          >
            <KeyboadArrowDown fontSize="large" />
          </Link>
        </Container>
      </Hero>

      <main id="contents" style={{ minHeight: '100vh' }} />

      <Footer />
    </>
  )
}

export default Home
