/// <reference types="@mdx-js/loader" />
/// <reference types="next" />
/// <reference types="next/types/global" />

type StaticImageData = {
  height: number
  placeholder?: string
  src: string
  width: number
}

declare module '*.jpg' {
  const content: StaticImageData

  export default content
}

declare module '*.png' {
  const content: StaticImageData

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
