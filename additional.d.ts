/// <reference types="@mdx-js/loader" />

declare module '*.mdx' {
  const MDXComponent: () => JSX.Element

  export default MDXComponent
}

declare module '*.svg' {
  import type { SVGProps, VFC } from 'react'

  type Props = SVGProps<SVGSVGElement>
  const content: VFC<Props>

  export default content
}
