import { ActionTree } from 'vuex'
import { RootState } from '../state'
import { Asset, AssetState } from './state'
import {
  ASSETS_FETCH_FAILURE,
  ASSETS_FETCH_REQUEST,
  ASSETS_FETCH_SUCCESS
} from './types'

const actions: ActionTree<AssetState, RootState> = {
  async fetch({ commit }): Promise<void> {
    commit(ASSETS_FETCH_REQUEST)

    let assets: Asset[]

    try {
      const response = await fetch('/list.json')
      assets = await response.json()
    } catch (error) {
      commit(ASSETS_FETCH_FAILURE, error)

      return
    }

    commit(ASSETS_FETCH_SUCCESS, assets)
  }
}

export default actions
