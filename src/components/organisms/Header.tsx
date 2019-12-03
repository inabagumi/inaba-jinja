import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Logo from '../atoms/Logo'

const useStyles = makeStyles({
  title: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center'
  }
})

const messages = defineMessages({
  title: {
    defaultMessage: 'Haneru Jinja',
    id: 'app.title'
  }
})

const Header: FC = (): JSX.Element => {
  const intl = useIntl()
  const classes = useStyles({})

  return (
    <AppBar color="default" elevation={0} position="static">
      <Toolbar>
        <Typography
          align="center"
          color="inherit"
          className={classes.title}
          noWrap
          variant="h6"
        >
          <Logo
            aria-label={intl.formatMessage(messages.title)}
            height="30"
          />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
