import { type MDXComponents } from 'mdx/types'
import Link from 'next/link'
import SimpleTitle from '@/components/simple-title'

const EXTERNAL_LINK_REL_LIST = ['noopener', 'noreferrer'] as const

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({
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

      return <Link href={href} target={target} {...props} />
    },
    h1: ({ children }) => <SimpleTitle>{children}</SimpleTitle>,
    ...components
  }
}
