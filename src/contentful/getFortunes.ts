import * as contentful from 'contentful'

export default async function getFortunes(): Promise<string[]> {
  if (!process.env.CONTENTFUL_ACCESS_TOKEN) throw new TypeError()
  if (!process.env.CONTENTFUL_SPACE_ID) throw new TypeError()

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID
  })

  const entries = await client.getEntries<undefined>({
    content_type: 'fortune',
    limit: 100,
    select: 'sys.id'
  })

  return entries.items.map((item) => item.sys.id)
}
