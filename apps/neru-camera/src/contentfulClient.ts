import * as contentful from 'contentful'

const createClient = (): contentful.ContentfulClientApi => {
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) throw new TypeError()
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) throw new TypeError()

  const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  })

  return client
}

export default createClient()
