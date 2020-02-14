import NextLink, { LinkProps } from 'next/link'
import React, { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react'

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const ExternalLink: FC<Props> = ({ children, ...props }) => (
  <a {...props} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
)

const Link: FC<Props & LinkProps> = ({
  as,
  href,
  prefetch,
  replace,
  scroll,
  shallow,
  ...props
}) => {
  if (!href || (typeof href === 'string' && /^https?:\/\//i.test(href))) {
    return <ExternalLink href={href} {...props} />
  }

  return (
    <NextLink
      as={as}
      href={href}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a {...props} />
    </NextLink>
  )
}

export default Link
