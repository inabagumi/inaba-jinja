import { MDXProvider } from '@mdx-js/react'
import NextLink from 'next/link'
import styles from './markdown-doc.module.css'
import Page from '@/components/layout'
import SEO from '@/components/seo'
import SimpleWindow from '@/components/simple-window'
import type { ReactNode, VFC } from 'react'

type LinkProps = Omit<JSX.IntrinsicElements['a'], 'href' | 'ref'> & {
  href: string
}

const Link: VFC<LinkProps> = ({ children, href, ...props }) => {
  if (/^https?:\/\//i.test(href)) {
    return (
      <a
        className={styles.link}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} passHref>
      <a className={styles.link} href={href} {...props}>
        {children}
      </a>
    </NextLink>
  )
}

type EmphasisProps = {
  children: ReactNode
}

const Emphasis: VFC<EmphasisProps> = ({ children }) => {
  return <em className={styles.emphasis}>{children}</em>
}

type Props = {
  children: ReactNode
  path?: string
  title?: string
}

const MarkdownDoc: VFC<Props> = ({ children, path, title }) => {
  return (
    <MDXProvider components={{ a: Link, em: Emphasis }}>
      <SEO path={path} title={title} type="article" />

      <Page>
        <SimpleWindow title={title}>{children}</SimpleWindow>
      </Page>
    </MDXProvider>
  )
}

export default MarkdownDoc
