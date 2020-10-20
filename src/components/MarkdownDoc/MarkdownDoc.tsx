import { MDXProvider } from '@mdx-js/react'

import { NextSeo } from 'next-seo'
import { FC } from 'react'

import Page from '@/components/Layout'
import SimpleWindow from '@/components/SimpleWindow'
import fullPath from '@/helpers/fullPath'

import Link from './Link'

const MDXComponents = {
  a: Link
}

type Props = {
  path?: string
  title?: string
}

const MarkdownDoc: FC<Props> = ({ children, path, title }) => {
  const canonicalURL = path && fullPath(path)

  return (
    <MDXProvider components={MDXComponents}>
      <NextSeo canonical={canonicalURL} title={title} />

      <Page>
        <SimpleWindow title={title}>{children}</SimpleWindow>
      </Page>
    </MDXProvider>
  )
}

export default MarkdownDoc
