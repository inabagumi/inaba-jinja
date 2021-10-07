import { createClient } from 'contentful'
import type { Asset, ContentfulClientApi, Entry } from 'contentful'

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

export async function getAsset(id?: string): Promise<Asset> {
  if (!id) throw new TypeError('The asset ID is required.')

  return getClient().getAsset(id)
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

export async function getFortune(id?: string): Promise<Fortune> {
  if (!id) throw new TypeError('The fortune ID is required.')

  return getClient().getEntry<FortuneFields>(id)
}

export async function getFortuneIDs(): Promise<string[]> {
  const entries = await getClient().getEntries<undefined>({
    content_type: 'fortune',
    limit: 100,
    select: 'sys.id'
  })

  return entries.items.map((item) => item.sys.id)
}

export async function getAnyFortuneID(): Promise<string> {
  const ids = await getFortuneIDs()

  if (ids.length < 1) {
    throw new TypeError("Fortune doesn't exist.")
  }

  return ids[Math.floor(Math.random() * ids.length)]
}

export function getImageURL(asset: Asset): string {
  const { pathname } = new URL(
    asset.fields.file.url,
    'https://images.ctfassets.net'
  )
  const [, spaceID, assetID, uniqueID, filename] = pathname.split('/')

  if (spaceID !== process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
    throw new TypeError('Space ID does not match.')
  }

  if (!assetID || !uniqueID || !filename) {
    throw new TypeError('Incorrect image URL format.')
  }

  return `/images/contentful/${assetID}/${uniqueID}/${filename}`
}
