/// <reference types="mdx" />

declare module '*.svg' {
  import type { SVGProps, VFC } from 'react'

  type Props = SVGProps<SVGSVGElement>
  const content: VFC<Props>

  export default content
}
