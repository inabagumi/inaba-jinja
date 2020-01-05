declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.webp'

declare module '*.svg' {
  import { FC, ReactSVGElement, SVGProps } from 'react'

  const content: FC<SVGProps<SVGSVGElement>> = () => ReactSVGElement
  export default content
}
