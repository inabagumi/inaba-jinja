import getClient from './getClient'
import type { FortuneEntry, FortuneFields } from '@/types/fortune'

export default async function getFortune(id?: string): Promise<FortuneEntry> {
  if (!id) throw new TypeError('The fortune ID is required.')

  return getClient().getEntry<FortuneFields>(id)
}
