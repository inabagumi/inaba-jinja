import NextLink from 'next/link'
import type { FC } from 'react'

type Props = JSX.IntrinsicElements['a']

const ExternalLink: FC<Props> = ({ children, ...props }) => (
  <a {...props} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
)

const Link: FC<Props> = ({ children, href, ...props }) => {
  if (!href || (typeof href === 'string' && /^https?:\/\//i.test(href))) {
    return (
      <ExternalLink href={href} {...props}>
        {children}
      </ExternalLink>
    )
  }

  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

export default Link
