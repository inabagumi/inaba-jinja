import { MDXProvider } from '@mdx-js/react'
import type { MDXProviderComponents } from '@mdx-js/react'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import type { FC } from 'react'

import ExternalLink from '@/components/external-link'
import Page from '@/components/layout'
import SimpleWindow from '@/components/simple-window'
import fullPath from '@/helpers/fullPath'

type LinkProps = JSX.IntrinsicElements['a']

const Link: FC<LinkProps> = ({ children, href, ...props }) => {
  if (!href || (typeof href === 'string' && /^https?:\/\//i.test(href))) {
    return (
      <ExternalLink href={href} {...props}>
        {children}
      </ExternalLink>
    )
  }

  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

const mdxComponents: MDXProviderComponents = {
  a: Link
}

type Props = {
  path?: string
  title?: string
}

const MarkdownDoc: FC<Props> = ({ children, path, title }) => {
  const canonicalURL = path && fullPath(path)

  return (
    <MDXProvider components={mdxComponents}>
      <NextSeo canonical={canonicalURL} title={title} />

      <Page>
        <SimpleWindow title={title}>{children}</SimpleWindow>
      </Page>
    </MDXProvider>
  )
}

export default MarkdownDoc
