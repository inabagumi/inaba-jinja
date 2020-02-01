import { Asset, Entry } from 'contentful'

export type OverlayFields = {
  keyColor: string
  media: Asset
  name: string
}

export type OverlayEntry = Entry<OverlayFields>
