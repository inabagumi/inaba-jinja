import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

const useStyles = makeStyles({
  title: {
    flexGrow: 1
  }
})

const Header: FC = (): JSX.Element => {
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
          <FormattedMessage defaultMessage="Inaba Jinja" id="app.title" />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
