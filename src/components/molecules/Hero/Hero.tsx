import Zoom from '@material-ui/core/Zoom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { defineMessages, useIntl } from 'react-intl'
import Logo from '../../atoms/Logo'

const messages = defineMessages({
  title: {
    defaultMessage: 'Inaba Jinja',
    id: 'app.title'
  }
})

const useStyles = makeStyles(theme => {
  const backgroundColor = 'rgba(0, 0, 0, 0.54)'

  return createStyles({
    hero: {
      alignItems: 'center',
      backgroundColor,
      backgroundImage: [
        `linear-gradient(${backgroundColor}, ${backgroundColor})`,
        'url("/images/hero.jpg")'
      ].join(','),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      minHeight: '500px',
      [theme.breakpoints.up('md')]: {
        minHeight: '100vh'
      }
    },
    logo: {
      color: 'rgba(255, 255, 255, 0.87)',
      height: '200px',
      width: 'auto',
      [theme.breakpoints.up('md')]: {
        height: '250px'
      }
    }
  })
})

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Hero: FC<Props> = ({ className }) => {
  const intl = useIntl()
  const classes = useStyles({})

  return (
    <div className={clsx(classes.hero, className)}>
      <Zoom in>
        <Logo
          aria-label={intl.formatMessage(messages.title)}
          className={classes.logo}
        />
      </Zoom>
    </div>
  )
}

export default Hero
