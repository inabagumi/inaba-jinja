import clsx from 'clsx'
import React, { FC, SVGProps } from 'react'
import HorizontalLogo from '../../../assets/logo.svg'
import VerticalLogo from '../../../assets/vertical-logo.svg'
import styles from './Logo.module.css'

type Props = {
  vertical?: boolean
} & SVGProps<SVGSVGElement>

const Logo: FC<Props> = ({ vertical = false, ...props }) => {
  const RawLogo = vertical ? VerticalLogo : HorizontalLogo
  const className = clsx(
    styles.logo,
    {
      [styles.logoVertical]: vertical
    },
    props.className
  )

  return <RawLogo {...props} className={className} />
}

export default Logo
