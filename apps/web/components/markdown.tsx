import { type MDXComponents } from 'mdx/types'
import NextLink from 'next/link'

const EXTERNAL_LINK_REL_LIST = ['noopener', 'noreferrer'] as const

export const MarkdownLink: NonNullable<MDXComponents['a']> = ({
  href,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: _ref,
  rel,
  target,
  ...props
}) => {
  if (!href || /https?:\/\//.test(href)) {
    const relList = rel ? rel.split(/\s+/) : []

    for (const relValue of EXTERNAL_LINK_REL_LIST) {
      if (!relList.includes(relValue)) {
        relList.push(relValue)
      }
    }

    return (
      <a
        href={href}
        rel={relList.length > 0 ? relList.join(' ') : undefined}
        target={target ?? '_blank'}
        {...props}
      />
    )
  }

  return <NextLink href={href} rel={rel} target={target} {...props} />
}
