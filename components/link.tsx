import NextLink from 'next/link'
import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

export type Props = ComponentPropsWithoutRef<'a'>

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { href = '', ...props },
  ref
) {
  return /^https?:\/\//i.test(href) ? (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
      ref={ref}
    />
  ) : (
    <NextLink href={href}>
      <a {...props} ref={ref} />
    </NextLink>
  )
})

export default Link
