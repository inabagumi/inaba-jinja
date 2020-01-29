import { PixiComponent } from '@inlet/react-pixi'
import { Viewport, ViewportOptions } from 'pixi-viewport'

export default PixiComponent<ViewportOptions, Viewport>('Viewport', {
  create: (props: ViewportOptions) => {
    const viewport = new Viewport(props)

    viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate()

    return viewport
  }
})
