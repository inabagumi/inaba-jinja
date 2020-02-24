import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import React, { FC, SVGProps } from 'react'
import HorizontalLogo from '../../../assets/logo.svg'
import VerticalLogo from '../../../assets/vertical-logo.svg'

type Props = {
  vertical?: boolean
} & SVGProps<SVGSVGElement>

const RawLogo: FC<Props> = ({ vertical = false, ...props }) => {
  const Component = vertical ? VerticalLogo : HorizontalLogo

  return <Component {...props} />
}

const Logo = styled(RawLogo)`
  display: inline-block;
  fill: currentColor;
  height: ${(props): string => (props.vertical ? 'auto' : '1em')};
  line-height: 1;
  vertical-align: middle;
  width: ${(props): string => (props.vertical ? '1em' : 'auto')};
`

export default Logo
