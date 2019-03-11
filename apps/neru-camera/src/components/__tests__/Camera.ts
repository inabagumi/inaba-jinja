import { shallowMount } from '@vue/test-utils'
import Camera from '@/components/Camera.vue'

describe('Camera.vue', () => {
  it('renders when passed', () => {
    const src = 'https://neru-camera.test/overlay.mp4'
    const wrapper = shallowMount(Camera, {
      propsData: { src }
    })
    expect(wrapper.text()).toMatchSnapshot()
  })
})
