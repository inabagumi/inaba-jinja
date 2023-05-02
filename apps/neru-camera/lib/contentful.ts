import {
  type ContentfulClientApi,
  type EntryFieldTypes,
  type EntrySkeletonType,
  createClient as createContentfulClient
} from 'contentful'

export type OverlayEntrySkeleton = EntrySkeletonType<
  {
    keyColor: EntryFieldTypes.Text
    media: EntryFieldTypes.AssetLink
    name: EntryFieldTypes.Text
  },
  'overlay'
>

export const createClient = (): ContentfulClientApi<undefined> => {
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) throw new TypeError()
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) throw new TypeError()

  return createContentfulClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  })
}
