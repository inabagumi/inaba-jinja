import type { FortuneEntry, FortuneFields } from '@/types/fortune'

import getClient from './getClient'

export default async function getFortune(id?: string): Promise<FortuneEntry> {
  if (!id) throw new TypeError('The fortune ID is required.')

  return getClient().getEntry<FortuneFields>(id)
}
