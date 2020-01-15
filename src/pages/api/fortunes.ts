import * as contentful from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'
import * as Sentry from '@sentry/node'

export default (_: NextApiRequest, res: NextApiResponse): void => {
  res.setHeader('Cache-Control', 'max-age=0, private')

  if (
    !process.env.CONTENTFUL_ACCESS_TOKEN ||
    !process.env.CONTENTFUL_SPACE_ID
  ) {
    res.status(500).json({ error: 'Internal Server Error' })
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

      res.json({ id })
    })
    .catch(error => {
      Sentry.captureException(error)

      res.status(500).json({ error: error.message })
    })
}
