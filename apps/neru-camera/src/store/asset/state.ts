export interface Asset {
  id: number
  keyColor: string
  src: string
}

export interface AssetState {
  assets: Asset[]
  isLoading: boolean
}

const state = (): AssetState => ({
  assets: [],
  isLoading: false
})

export default state
