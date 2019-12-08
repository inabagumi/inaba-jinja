import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React, { FC, SVGProps } from 'react'
import RawLogo from './Logo.svg'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    fill: 'currentColor'
  }
})

type Props = SVGProps<SVGSVGElement>

const Logo: FC<Props> = ({ className, ...props }) => {
  const classes = useStyles({})

  return (
    <RawLogo
      className={clsx(classes.root, className)}
      focusable="false"
      role="img"
      {...props}
    />
  )
}

export default Logo
