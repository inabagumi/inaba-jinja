import { type Asset } from 'contentful'
import { type FortuneEntry } from './contentful'

export function generateFortuneName(fortune: FortuneEntry): string {
  return `第${fortune.fields.number}番『${fortune.fields.blessing}』`
}

export function getImageURL(
  asset: Asset<'WITHOUT_UNRESOLVABLE_LINKS'>
): string {
  if (!asset.fields.file?.url) {
    throw new TypeError('')
  }

  const url = new URL(asset.fields.file.url, 'https://images.ctfassets.net')

  return url.toString()
}
