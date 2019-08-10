import { MutationTree } from 'vuex'
import { Asset, AssetState } from './state'
import {
  ASSETS_FETCH_FAILURE,
  ASSETS_FETCH_REQUEST,
  ASSETS_FETCH_SUCCESS
} from './types'

const mutations: MutationTree<AssetState> = {
  [ASSETS_FETCH_FAILURE](state): void {
    state.isLoading = false
  },

  [ASSETS_FETCH_REQUEST](state): void {
    state.isLoading = true
  },

  [ASSETS_FETCH_SUCCESS](state, assets: Asset[]): void {
    state.assets = assets
    state.isLoading = false
  }
}

export default mutations
