/// <reference types="@mdx-js/loader" />
/// <reference types="next" />
/// <reference types="next/types/global" />

type ResponsiveLoaderImage = {
  height: number
  path: string
  width: number
}

type ResponsiveLoaderOutput = {
  height: number
  images: ResponsiveLoaderImage[]
  placeholder: string
  src: string
  srcSet: string
  toString: () => string
  width: number
}

declare module '*.jpg' {
  const content: ResponsiveLoaderOutput

  export default content
}

declare module '*.png' {
  const content: ResponsiveLoaderOutput

  export default content
}

declare module '*.svg' {
  import { VFC } from 'react'

  type Props = Omit<JSX.IntrinsicElements['svg'], 'ref'>

  const content: VFC<Props>
  export default content
}

declare module '*.mdx' {
  const MDXComponent: () => JSX.Element

  export default MDXComponent
}
