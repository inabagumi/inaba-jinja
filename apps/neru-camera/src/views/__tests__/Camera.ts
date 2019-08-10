import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import asset from '../../store/asset'
import {
  ASSETS_FETCH_REQUEST,
  ASSETS_FETCH_SUCCESS
} from '../../store/asset/types'
import { RootState } from '../../store/state'
import Camera from '../Camera.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Camera.vue', (): void => {
  let store: Store<RootState>

  beforeEach((): void => {
    store = new Store({
      modules: { asset }
    })
  })

  it('renders when passed', (): void => {
    store.commit(`asset/${ASSETS_FETCH_REQUEST}`)
    store.commit(`asset/${ASSETS_FETCH_SUCCESS}`, [
      {
        id: 1,
        keyColor: 0x00ff00,
        src: 'https://neru-camera.test/overlay.mp4'
      }
    ])

    const wrapper = shallowMount(Camera, {
      localVue,
      mocks: {
        $route: {
          params: {
            id: 2
          }
        }
      },
      store
    })

    expect(wrapper.text()).toMatchSnapshot()
  })
})
