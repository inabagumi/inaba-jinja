import {
  type Asset,
  type ContentfulClientApi,
  type Entry,
  type EntryCollection,
  createClient
} from 'contentful'
import dedent from 'dedent'
import { cache } from 'react'
import { fromAsync } from '@/lib/polyfills/array'
import { redisClient } from '@/lib/redis'

let client: ContentfulClientApi

export function getClient(
  accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
): ContentfulClientApi {
  if (!client) {
    if (!accessToken) throw new TypeError('The access token is required.')
    if (!space) throw new TypeError('The space ID is required.')

    client = createClient({
      accessToken,
      space
    })
  }

  return client
}

export type FortuneFields = {
  blessing: string
  card: Asset
  description: string
  number: number
  paper: Asset
  prePaper: string
}

export type Fortune = Entry<FortuneFields>

export const getFortune = cache(async function getFortune(
  id?: string
): Promise<Fortune> {
  if (!id) throw new TypeError('The fortune ID is required.')

  return getClient().getEntry<FortuneFields>(id)
})

export const getFortuneIDs = cache(
  async function* getFortuneIDs(): AsyncGenerator<string, void> {
    const { items, limit, total } = await getClient().getEntries<undefined>({
      content_type: 'fortune',
      limit: 100,
      select: 'sys.id'
    })

    for (const entry of items) {
      yield entry.sys.id
    }

    if (items.length < total) {
      const promises: Promise<EntryCollection<undefined>>[] = []

      for (let skip = limit; skip < total; skip += limit) {
        promises.push(
          getClient().getEntries<undefined>({
            content_type: 'fortune',
            limit,
            select: 'sys.id'
          })
        )
      }

      const collectionList = await Promise.all(promises)
      for (const { items: collectionItems } of collectionList) {
        for (const entry of collectionItems) {
          yield entry.sys.id
        }
      }
    }
  }
)

export async function getAnyFortuneID(): Promise<string> {
  const id = await redisClient.spop<string>('fortunes')

  if (id) {
    return id
  }

  const m = redisClient.multi()
  const idSet = await fromAsync(getFortuneIDs())

  m.eval<string[], string | null>(
    dedent`
      local expire = 60 * 60 * 24 * 30

      if redis.call('SCARD', KEYS[1]) < 1 then
        redis.call('SADD', KEYS[1], unpack(ARGV, 2))
        redis.call('EXPIRE', KEYS[1], expire)
      end

      return redis.call('SPOP', KEYS[1])
    `,
    ['fortunes'],
    idSet
  )

  const [newID] = await m.exec<[string | null]>()

  if (!newID) {
    throw new TypeError("Fortune doesn't exist.")
  }

  return newID
}

export function getImageURL(asset: Asset): string {
  const url = new URL(asset.fields.file.url, 'https://images.ctfassets.net')

  return url.toString()
}
