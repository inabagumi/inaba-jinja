import clsx from 'clsx'
import { type MDXComponents } from 'mdx/types'
import NextLink from 'next/link'
import styles from './markdown.module.css'

const EXTERNAL_LINK_REL_LIST = ['noopener', 'noreferrer'] as const

export const MarkdownEmphasis: NonNullable<MDXComponents['em']> = ({
  className,
  ...props
}) => <em className={clsx(styles.em, className)} {...props} />

export const MarkdownLink: NonNullable<MDXComponents['a']> = ({
  className,
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
        className={clsx(styles.link, className)}
        href={href}
        rel={relList.length > 0 ? relList.join(' ') : undefined}
        target={target ?? '_blank'}
        {...props}
      />
    )
  }

  return (
    <NextLink
      className={clsx(styles.link, className)}
      href={href}
      rel={rel}
      target={target}
      {...props}
    />
  )
}
