/// <reference types="mdx" />

declare module '*.svg' {
  import { type FC, type SVGProps } from 'react'

  type Props = SVGProps<SVGSVGElement>
  const content: FC<Props>

  export default content
}
