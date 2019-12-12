import AppBar from '@material-ui/core/AppBar'
import Collapse from '@material-ui/core/Collapse'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles(theme =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
)

type Props = {
  hide?: boolean
}

const Header: FC<Props> = ({ hide = false }) => {
  const classes = useStyles({})

  return (
    <Collapse in={!hide}>
      <AppBar color="default" elevation={0} position="fixed">
        <Toolbar>
          <Container>
            <Typography className={classes.title} noWrap variant="h6">
              <NextLink href="/" passHref prefetch={false}>
                <Link color="inherit" underline="none">
                  <FormattedMessage
                    defaultMessage="Inaba Jinja"
                    id="app.title"
                  />
                </Link>
              </NextLink>
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Collapse>
  )
}

export default Header
