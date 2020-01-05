import React, { FC } from 'react'
import css from 'styled-jsx/css'
import RawLogo from './Logo.svg'

const { className, styles } = css.resolve`
  svg {
    display: inline-block;
    fill: currentColor;
    height: auto;
    line-height: 1;
    vertical-align: middle;
    width: 1em;
  }
`

const Logo: FC = () => (
  <>
    <RawLogo className={className} xmlns={undefined} />

    {styles}
  </>
)

export default Logo
