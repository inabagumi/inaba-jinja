import { MDXProvider } from '@mdx-js/react'
import type { MDXProviderComponents } from '@mdx-js/react'
import NextLink from 'next/link'
import { NextSeo } from 'next-seo'
import type { FC } from 'react'
import styled from 'styled-components'

import ExternalLink from '@/components/external-link'
import Page from '@/components/layout'
import SimpleWindow from '@/components/simple-window'
import fullPath from '@/helpers/fullPath'

const StyledLink = styled.a`
  color: var(--ij-color-primary);
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

type LinkProps = Omit<JSX.IntrinsicElements['a'], 'href' | 'ref'> & {
  href: string
}

const Link: FC<LinkProps> = ({ children, href, ...props }) => {
  if (/^https?:\/\//i.test(href)) {
    return (
      <StyledLink as={ExternalLink} href={href} {...props}>
        {children}
      </StyledLink>
    )
  }

  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  )
}

const Emphasis = styled.em`
  font-style: normal;
  font-weight: 700;
`

const mdxComponents: MDXProviderComponents = {
  a: Link,
  em: Emphasis
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
