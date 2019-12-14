import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'
import React, { FC } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Logo from '../../atoms/Logo'

const messages = defineMessages({
  title: {
    defaultMessages: '因幡神社',
    id: 'app.title'
  }
})

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    logo: {
      height: 36,
      width: 'auto'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
)

type Props = {}

const Header: FC<Props> = () => {
  const intl = useIntl()
  const classes = useStyles({})

  return (
    <AppBar
      className={classes.root}
      color="default"
      elevation={0}
      position="fixed"
    >
      <Toolbar>
        <Container maxWidth="lg">
          <Typography className={classes.title} noWrap variant="h6">
            <NextLink href="/" passHref prefetch={false}>
              <Link color="inherit" underline="none">
                <Logo
                  aria-label={intl.formatMessage(messages.title)}
                  className={classes.logo}
                />
              </Link>
            </NextLink>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
