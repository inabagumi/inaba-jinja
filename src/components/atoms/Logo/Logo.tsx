import clsx from 'clsx'
import React, { FC, SVGProps } from 'react'
import css from 'styled-jsx/css'
import RawLogo from './Logo.svg'

const { className, styles } = css.resolve`
  svg {
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
  }
`

type Props = SVGProps<SVGSVGElement>

const Logo: FC<Props> = ({ className: additionalClassName, ...props }) => {
  return (
    <>
      <RawLogo
        className={clsx(className, additionalClassName)}
        focusable="false"
        role="img"
        xmlns={undefined}
        {...props}
      />

      {styles}
    </>
  )
}

export default Logo
