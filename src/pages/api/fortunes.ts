import * as contentful from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  if (
    !process.env.CONTENTFUL_ACCESS_TOKEN ||
    !process.env.CONTENTFUL_SPACE_ID
  ) {
    res.writeHead(500)
    res.json({ error: 'Internal Server Error' })
    return
  }

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID
  })
  client
    .getEntries<undefined>({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: 'fortune',
      limit: 100,
      select: 'sys.id'
    })
    .then(entries => {
      const fortunes = entries.items.map(entry => entry.sys.id)
      const id = fortunes[Math.floor(Math.random() * fortunes.length)]

      res.setHeader('Cache-Control', 'max-age=0, private')
      res.json({ id })
    })
    .catch(error => {
      res.writeHead(500)
      res.json({ error: error.message })
    })
}
