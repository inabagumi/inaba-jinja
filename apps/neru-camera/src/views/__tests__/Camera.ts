import { shallowMount } from '@vue/test-utils'
import Camera from '../Camera.vue'

const asset = {
  id: 1,
  keyColor: 0x00ff00,
  src: 'https://neru-camera.test/overlay.mp4'
}

describe('Camera.vue', () => {
  it('renders when passed', () => {
    const wrapper = shallowMount(Camera, {
      propsData: { asset }
    })
    expect(wrapper.text()).toMatchSnapshot()
  })
})
