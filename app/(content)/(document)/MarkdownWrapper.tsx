'use client'

import { MDXProvider } from '@mdx-js/react'
import { type FunctionComponent, type MDXComponents } from 'mdx/types'
import { type ReactNode } from 'react'
import Link, { type Props as LinkProps } from './Link'

const mdxComponents: MDXComponents = {
  a: Link as FunctionComponent<LinkProps>
}

type Props = {
  children: ReactNode
}

export default function MarkdownWrapper({ children }: Props): JSX.Element {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>
}
