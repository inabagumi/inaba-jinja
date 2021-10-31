import NextLink from 'next/link'
import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

export type Props = ComponentPropsWithoutRef<'a'>

const Link = forwardRef<HTMLAnchorElement, Props>(function Link({
  href = '',
  ...props
}) {
  return /^https?:\/\//i.test(href) ? (
    <a href={href} rel="noopener noreferrer" target="_blank" {...props} />
  ) : (
    <NextLink href={href}>
      <a {...props} />
    </NextLink>
  )
})

export default Link
