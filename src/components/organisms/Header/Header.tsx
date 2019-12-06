import AppBar from '@material-ui/core/AppBar'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  openDrawer: {
    defaultMessage: 'Open drawer',
    id: 'app.open_drawer'
  }
})

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
  const intl = useIntl()
  const classes = useStyles({})

  return (
    <Collapse in={!hide}>
      <AppBar color="default" elevation={0} position="fixed">
        <Toolbar>
          <IconButton
            aria-label={intl.formatMessage(messages.openDrawer)}
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} noWrap variant="h6">
            <FormattedMessage defaultMessage="Inaba Jinja" id="app.title" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Collapse>
  )
}

export default Header
