import NextLink from 'next/link'
import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

export type Props = ComponentPropsWithoutRef<'a'>

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { href = '', ...props },
  ref
) {
  return href || !/^https?:\/\//i.test(href) ? (
    <NextLink href={href}>
      <a {...props} ref={ref} />
    </NextLink>
  ) : (
    <a href={href} {...props} ref={ref} />
  )
})

export default Link
