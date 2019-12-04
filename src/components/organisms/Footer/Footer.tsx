import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2)
    }
  })
)

const Footer: FC = () => {
  const classes = useStyles({})

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary">
          {'Copyright © 2019 '}
          <Link
            color="inherit"
            href="https://haneru.dev/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Haneru Developers
          </Link>
          {'.'}
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
