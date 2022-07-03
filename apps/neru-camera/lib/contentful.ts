import {
  type Asset,
  type ContentfulClientApi,
  type Entry,
  createClient as createContentfulClient
} from 'contentful'

export type OverlayFields = {
  keyColor: string
  media: Asset
  name: string
}

export type OverlayEntry = Entry<OverlayFields>

export const createClient = (): ContentfulClientApi => {
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) throw new TypeError()
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) throw new TypeError()

  return createContentfulClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  })
}
