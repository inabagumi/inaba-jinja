import type { Asset } from 'contentful'

import getClient from './getClient'

export default async function getFortune(id?: string): Promise<Asset> {
  if (!id) throw new TypeError('The asset ID is required.')

  return getClient().getAsset(id)
}
