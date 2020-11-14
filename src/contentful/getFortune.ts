import * as contentful from 'contentful'

import { FortuneEntry, FortuneFields } from '@/types/fortune'

export default async function getFortune(id?: string): Promise<FortuneEntry> {
  if (!id) throw new TypeError()
  if (!process.env.CONTENTFUL_ACCESS_TOKEN) throw new TypeError()
  if (!process.env.CONTENTFUL_SPACE_ID) throw new TypeError()

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID
  })

  return client.getEntry<FortuneFields>(id)
}
