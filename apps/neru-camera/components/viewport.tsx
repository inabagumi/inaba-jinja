import { PixiComponent } from '@inlet/react-pixi'
import { type IViewportOptions, Viewport } from 'pixi-viewport'
import { type ReactNode } from 'react'

type Props = IViewportOptions & {
  children: ReactNode
}

export default PixiComponent<Props, Viewport>('Viewport', {
  create: (props: IViewportOptions) => {
    const viewport = new Viewport(props)

    viewport.drag({}).pinch({}).wheel({}).decelerate({})

    return viewport
  }
})
