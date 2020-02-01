import * as contentful from 'contentful'

const createClient = (): contentful.ContentfulClientApi => {
  if (!process.env.CONTENTFUL_ACCESS_TOKEN) throw new TypeError()
  if (!process.env.CONTENTFUL_SPACE_ID) throw new TypeError()

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID
  })

  return client
}

export default createClient()
