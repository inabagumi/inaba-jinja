import NextLink from 'next/link'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

export type Props = ComponentPropsWithoutRef<'a'>

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { href = '', ...props },
  ref
) {
  const Component = !/^https?:\/\//i.test(href) ? NextLink : 'a'

  return <Component href={href} {...props} ref={ref} />
})

export default Link
