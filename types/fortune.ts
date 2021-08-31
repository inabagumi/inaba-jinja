import { Asset, Entry } from 'contentful'

export type FortuneFields = {
  blessing: string
  card: Asset
  description: string
  number: number
  paper: Asset
  prePaper: string
}

export type FortuneEntry = Entry<FortuneFields>
