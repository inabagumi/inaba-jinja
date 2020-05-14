import clsx from 'clsx'
import React, { FC, SVGProps } from 'react'

import HorizontalLogo from 'assets/logo.svg'
import VerticalLogo from 'assets/vertical-logo.svg'

type Props = {
  vertical?: boolean
} & SVGProps<SVGSVGElement>

const Logo: FC<Props> = ({ vertical = false, ...props }) => {
  const Component = vertical ? VerticalLogo : HorizontalLogo

  return (
    <>
      <Component
        className={clsx('logo', { 'logo--vertical': vertical })}
        {...props}
      />

      <style jsx>{`
        .logo {
          display: inline-block;
          fill: currentColor;
          height: 1em;
          line-height: 1;
          vertical-align: middle;
          width: auto;
        }

        .logo--vertical {
          height: auto;
          width: 1em;
        }
      `}</style>
    </>
  )
}

export default Logo
