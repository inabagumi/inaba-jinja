import { GetterTree } from 'vuex'
import { RootState } from '../state'
import { Asset, AssetState } from './state'

const getters: GetterTree<AssetState, RootState> = {
  getAssetById: (state): ((id: number) => Asset | null) => (
    id: number
  ): Asset | null =>
    state.assets.find((asset): boolean => asset.id === id) || null
}

export default getters
