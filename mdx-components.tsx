import { type MDXComponents } from 'mdx/types'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, ref: _ref, ...props }) => {
      if (!href || /https?:\/\//.test(href)) {
        return <a href={href} {...props} />
      }

      return <Link href={href} {...props} />
    },
    ...components
  }
}
