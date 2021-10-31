import { MDXProvider, useMDXComponents } from '@mdx-js/react'
import Page from '@/components/layout'
import Link, { Props as LinkProps } from '@/components/link'
import SEO from '@/components/seo'
import SimpleWindow from '@/components/simple-window'
import styles from './markdown-doc.module.css'
import type { FunctionComponent } from 'mdx/types'
import type { ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
  path?: string
  title?: string
}

const MarkdownDoc: VFC<Props> = ({ children, path, title }) => {
  const components = useMDXComponents({
    a: Link as FunctionComponent<LinkProps>
  })

  return (
    <MDXProvider components={components}>
      <SEO path={path} title={title} type="article" />

      <Page>
        <SimpleWindow title={title}>
          <div className={styles.markdown}>{children}</div>
        </SimpleWindow>
      </Page>
    </MDXProvider>
  )
}

export default MarkdownDoc
