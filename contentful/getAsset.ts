import getClient from './getClient'
import type { Asset } from 'contentful'

export default async function getFortune(id?: string): Promise<Asset> {
  if (!id) throw new TypeError('The asset ID is required.')

  return getClient().getAsset(id)
}
