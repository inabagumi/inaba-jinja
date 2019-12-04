import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import React, { FC } from 'react'
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  openDrawer: {
    defaultMessage: 'Open drawer',
    id: 'app.open_drawer'
  }
})

const Header: FC = () => {
  const intl = useIntl()

  return (
    <AppBar color="default" elevation={0} position="static">
      <Toolbar>
        <IconButton
          aria-label={intl.formatMessage(messages.openDrawer)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
