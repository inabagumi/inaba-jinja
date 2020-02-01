import { Asset, Entry } from 'contentful'

export type OverlayFields = {
  keyColor: string
  media: Asset
}

export type OverlayEntry = Entry<OverlayFields>
