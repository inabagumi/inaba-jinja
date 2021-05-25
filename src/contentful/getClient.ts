import { createClient } from 'contentful'
import type { ContentfulClientApi } from 'contentful'

let client: ContentfulClientApi

export default function getClient(
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
