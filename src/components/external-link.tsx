import type { FC } from 'react'

type Props = JSX.IntrinsicElements['a']

const ExternalLink: FC<Props> = ({ children, ...props }) => (
  <a {...props} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
)

export default ExternalLink
