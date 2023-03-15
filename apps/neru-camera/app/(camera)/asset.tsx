'use client'

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState
} from 'react'
import { type OverlayEntry } from '@/lib/contentful'

type AssetValues = {
  current?: OverlayEntry
  setAsset?: Dispatch<SetStateAction<OverlayEntry>>
  values: OverlayEntry[]
}

const AssetContext = createContext<AssetValues>({
  values: []
})

type SetAssetIDFn = (id: string) => void
type UseAsset = {
  assets: OverlayEntry[]
  currentAsset: OverlayEntry
  setAssetID: SetAssetIDFn
}

export function useAsset(): UseAsset {
  const { current, setAsset, values } = useContext(AssetContext)

  const setAssetID = useCallback<SetAssetIDFn>(
    (assetID) => {
      if (typeof setAsset !== 'function') {
        throw new TypeError('Asset could not be changed.')
      }

      const nextAsset = values.find((asset) => asset.sys.id === assetID)

      if (!nextAsset) {
        throw new TypeError('Asset matching ID does not exist.')
      }

      setAsset(nextAsset)
    },
    [setAsset, values]
  )

  if (!current) {
    throw new TypeError('Failed to initialize Asset.')
  }

  return {
    assets: values,
    currentAsset: current,
    setAssetID
  }
}

type AssetProviderProps = {
  assets: OverlayEntry[]
  children: ReactNode
}

export function AssetProvider({ assets, children }: AssetProviderProps) {
  const [current, setAsset] = useState(() => assets[0])

  return (
    <AssetContext.Provider value={{ current, setAsset, values: assets }}>
      {children}
    </AssetContext.Provider>
  )
}
