import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import KeyboadArrowDown from '@material-ui/icons/KeyboardArrowDown'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Element as ScrollElement, Link as ScrollLink } from 'react-scroll'
import Hero from '../../molecules/Hero'

const useStyles = makeStyles(theme =>
  createStyles({
    description: {
      fontFamily: ['Roboto Slab', 'Noto Serif JP', 'serif'].join(','),
      height: '30em',
      letterSpacing: '0.2em',
      margin: theme.spacing(0),
      padding: theme.spacing(0),
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
      display: 'block',
      marginBottom: theme.spacing(5)
    }
  })
)

const Home: FC = () => {
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
            className={classes.scrollDown}
            color="inherit"
            component={ScrollLink}
            href="#content"
            smooth
            to="contents"
          >
            <KeyboadArrowDown fontSize="large" />
          </Link>
        </Container>
      </Hero>

      <ScrollElement name="contents">
        <main id="contents" style={{ minHeight: '100vh' }} />
      </ScrollElement>
    </>
  )
}

export default Home
