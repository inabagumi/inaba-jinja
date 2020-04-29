/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.jpg' {
  export const preSrc: string
  export const src: string
}
declare module '*.png'

declare module '*.svg' {
  import { FC, ReactSVGElement, SVGProps } from 'react'

  const content: FC<SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.mdx' {
  const MDXComponent: () => JSX.Element

  export default MDXComponent
}
