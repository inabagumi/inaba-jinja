import { PixiComponent } from '@inlet/react-pixi'
import { type IViewportOptions, Viewport } from 'pixi-viewport'

export default PixiComponent<IViewportOptions, Viewport>('Viewport', {
  create: (props: IViewportOptions) => {
    const viewport = new Viewport(props)

    viewport.drag({}).pinch({}).wheel({}).decelerate({})

    return viewport
  }
})
