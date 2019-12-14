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
import lqipMainVisual from './main-visual@lqip.jpg'

const useStyles = makeStyles(theme => {
  const backgroundColor = 'rgba(0, 0, 0, 0.54)'

  return createStyles({
    root: {
      backgroundAttachment: 'fixed',
      backgroundColor,
      backgroundImage: [
        `linear-gradient(${backgroundColor}, ${backgroundColor})`,
        `url("${mainVisual}")`,
        `url("${lqipMainVisual}")`
      ].join(','),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: theme.palette.getContrastText(backgroundColor),
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
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
        <link as="image" href={mainVisual} rel="preload" />
      </Head>

      <div className={clsx(classes.root, className)} ref={ref} {...props}>
        {children}
      </div>
    </>
  )
}

export default forwardRef(Hero)
