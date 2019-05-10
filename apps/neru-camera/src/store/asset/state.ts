export type Asset = {
  id: number
  keyColor: string
  src: string
}

export type AssetState = {
  assets: Asset[]
  isLoading: boolean
}

const state = (): AssetState => ({
  assets: [],
  isLoading: false
})

export default state
