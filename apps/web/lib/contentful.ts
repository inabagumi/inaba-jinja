import {
  type ContentfulClientApi,
  type Entry,
  type EntryCollection,
  type EntryFieldTypes,
  type EntrySkeletonType,
  createClient
} from 'contentful'
import dedent from 'dedent'
import { unstable_cache as cache } from 'next/cache'
import { cache as reactCache } from 'react'
import { redisClient } from '@/lib/redis'

let client: ContentfulClientApi<'WITHOUT_UNRESOLVABLE_LINKS'>

export function getClient(
  accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
): ContentfulClientApi<'WITHOUT_UNRESOLVABLE_LINKS'> {
  if (!client) {
    if (!accessToken) throw new TypeError('The access token is required.')
    if (!space) throw new TypeError('The space ID is required.')

    client = createClient({
      accessToken,
      space
    }).withoutUnresolvableLinks
  }

  return client
}

export type FortuneEntrySkeleton = EntrySkeletonType<
  {
    blessing: EntryFieldTypes.Text
    card: EntryFieldTypes.AssetLink
    description: EntryFieldTypes.Text
    number: EntryFieldTypes.Number
    paper: EntryFieldTypes.AssetLink
    prePaper: EntryFieldTypes.Text
  },
  'fortune'
>

export type FortuneEntry = Entry<
  FortuneEntrySkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS'
>

export const getFortune = cache(
  async function getFortune(id?: string): Promise<FortuneEntry> {
    if (!id) throw new TypeError('The fortune ID is required.')

    return getClient().getEntry<FortuneEntrySkeleton>(id)
  },
  ['fortune']
)

export const getFortuneIDs = cache(
  async function getFortuneIDs(): Promise<string[]> {
    const results: string[] = []

    const { items, limit, total } =
      await getClient().getEntries<FortuneEntrySkeleton>({
        content_type: 'fortune',
        limit: 100,
        select: ['sys.id']
      })

    results.push(...items.map((entry) => entry.sys.id))

    if (items.length < total) {
      const promises: Promise<EntryCollection<FortuneEntrySkeleton>>[] = []

      for (let skip = limit; skip < total; skip += limit) {
        promises.push(
          getClient().getEntries<FortuneEntrySkeleton>({
            content_type: 'fortune',
            limit,
            select: ['sys.id']
          })
        )
      }

      const collectionList = await Promise.all(promises)
      for (const { items: collectionItems } of collectionList) {
        results.push(...collectionItems.map((entry) => entry.sys.id))
      }
    }

    return results
  },
  ['fortunes']
)

export const getAnyFortuneID = reactCache(async function getAnyFortuneID() {
  const id = await redisClient.spop<string>('fortunes')

  if (id) {
    return id
  }

  const m = redisClient.multi()
  const idSet = await getFortuneIDs()

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
})
