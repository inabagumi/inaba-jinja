/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="@inabagumi/next-images" />

declare module '*.mdx' {
  const MDXComponent: () => JSX.Element

  export default MDXComponent
}
