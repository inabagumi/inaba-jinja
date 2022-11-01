import {
  type Asset,
  type ContentfulClientApi,
  type Entry,
  createClient
} from 'contentful'
import { cache } from 'react'

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

export const getFortuneIDs = cache(async function getFortuneIDs(): Promise<
  string[]
> {
  const entries = await getClient().getEntries<undefined>({
    content_type: 'fortune',
    limit: 100,
    select: 'sys.id'
  })

  return entries.items.map((item) => item.sys.id)
})

export async function getAnyFortuneID(): Promise<string> {
  const ids = await getFortuneIDs()

  if (ids.length < 1) {
    throw new TypeError("Fortune doesn't exist.")
  }

  return ids[Math.floor(Math.random() * ids.length)]
}

export function getImageURL(asset: Asset): string {
  const url = new URL(asset.fields.file.url, 'https://images.ctfassets.net')

  return url.toString()
}
