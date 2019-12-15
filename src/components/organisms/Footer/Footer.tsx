import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'
import React, { FC } from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import Logo from '../../atoms/Logo'

const messages = defineMessages({
  title: {
    defaultMessage: '因幡神社',
    id: 'app.title'
  }
})

const useStyles = makeStyles(theme =>
  createStyles({
    logo: {
      height: 'auto',
      width: 150,

      [theme.breakpoints.up('sm')]: {
        width: 120
      }
    },
    logoGrid: {
      padding: theme.spacing(2, 0),
      textAlign: 'center',

      [theme.breakpoints.up('sm')]: {
        textAlign: 'left'
      }
    },
    navLinks: {
      padding: theme.spacing(3, 0),

      '& ul': {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        listStyle: 'none',
        margin: 0,
        padding: 0
      },
      '& li': {
        fontSize: '0.9rem',
        margin: theme.spacing(0, 0, 0, 1)
      }
    }
  })
)

const Footer: FC = () => {
  const intl = useIntl()
  const classes = useStyles({})

  return (
    <>
      <Divider />

      <Container component="footer" maxWidth="lg">
        <Grid alignItems="center" container>
          <Grid className={classes.logoGrid} item sm={6} xs={12}>
            <Logo
              aria-label={intl.formatMessage(messages.title)}
              className={classes.logo}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <nav className={classes.navLinks}>
              <ul>
                <li>
                  <Link
                    color="textSecondary"
                    href="https://haneru.dev/"
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="body2"
                  >
                    <FormattedMessage
                      defaultMessage="Haneru Developers"
                      id="footer.haneru_developers"
                    />
                  </Link>
                </li>
                <li>
                  <NextLink href="/privacy" passHref prefetch={false}>
                    <Link color="textSecondary" variant="body2">
                      <FormattedMessage
                        defaultMessage="プライバシーポリシー"
                        id="footer.privacy_policy"
                      />
                    </Link>
                  </NextLink>
                </li>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Footer
