import { type FC, type ReactNode } from 'react'
import Page from '@/components/layout'
import SEO from '@/components/seo'
import SimpleWindow from '@/components/simple-window'
import styles from './markdown-doc.module.css'

type Props = {
  children: ReactNode
  path?: string
  title?: string
}

const MarkdownDoc: FC<Props> = ({ children, path, title }) => {
  return (
    <Page>
      <SEO path={path} title={title} type="article" />

      <SimpleWindow title={title}>
        <div className={styles.markdown}>{children}</div>
      </SimpleWindow>
    </Page>
  )
}

export default MarkdownDoc
