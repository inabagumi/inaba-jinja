/// <reference types="@mdx-js/loader" />
/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.mdx' {
  const MDXComponent: () => JSX.Element

  export default MDXComponent
}

declare module '@/assets/*.svg' {
  import { VFC } from 'react'

  type Props = Omit<JSX.IntrinsicElements['svg'], 'ref'>

  const content: VFC<Props>
  export default content
}
