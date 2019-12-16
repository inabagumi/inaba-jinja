import { createStyles, makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Head from 'next/head'
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  RefForwardingComponent,
  forwardRef
} from 'react'
import mainVisual from './main-visual.jpg'
import webpMainVisual from './main-visual.webp'
import lqipMainVisual from './main-visual@lqip.jpg'

const useStyles = makeStyles(theme => {
  const backgroundColor = 'rgba(0, 0, 0, 0.54)'

  return createStyles({
    content: {
      alignItems: 'center',
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    },
    cover: {
      backgroundColor: 'transparent',
      backgroundImage: `url("${lqipMainVisual}")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,

      '&::after': {
        backgroundColor,
        bottom: 0,
        content: '""',
        display: 'block',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0
      },

      '& img': {
        bottom: 0,
        display: 'block',
        height: '100%',
        left: 0,
        objectFit: 'cover',
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100%'
      }
    },
    root: {
      backgroundColor,
      color: theme.palette.getContrastText(backgroundColor),
      minHeight: '100%',
      position: 'relative'
    }
  })
})

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const Hero: RefForwardingComponent<HTMLDivElement, Props> = (
  { children, className, ...props },
  ref
) => {
  const classes = useStyles({})

  return (
    <>
      <Head>
        <link
          as="image"
          href={webpMainVisual}
          rel="preload"
          type="image/webp"
        />
      </Head>

      <div className={clsx(classes.root, className)} ref={ref} {...props}>
        <div className={classes.cover}>
          <picture>
            <source srcSet={webpMainVisual} type="image/webp" />

            <img
              alt=""
              height="600"
              role="presentation"
              src={mainVisual}
              width="800"
            />
          </picture>
        </div>

        <div className={classes.content}>{children}</div>
      </div>
    </>
  )
}

export default forwardRef(Hero)
