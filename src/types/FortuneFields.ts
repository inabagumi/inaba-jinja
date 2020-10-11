import { Asset } from 'contentful'

type FortuneFields = {
  blessing: string
  card: Asset
  description: string
  number: number
  paper: Asset
  prePaper: string
}

export default FortuneFields
