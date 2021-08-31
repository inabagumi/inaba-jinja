import { request } from 'https'
import type { NextApiHandler } from 'next'

import getAsset from '@/contentful/getAsset'

const handler: NextApiHandler = async (req, res) => {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id
  const asset = await getAsset(id).catch(() => undefined)

  if (!asset) {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    res.end('not found')

    return
  }

  const url = `https:${asset.fields.file.url}`
  const updatedAt = new Date(asset.sys.updatedAt)

  const assetReq = request(url, { method: 'get' }, (assetRes) => {
    res.writeHead(200, {
      'Cache-Control': 'max-age=31536000',
      'Content-Disposition': `filename=${asset.fields.file.fileName}`,
      'Content-Length': asset.fields.file.details.size.toString(10),
      'Content-Type': asset.fields.file.contentType,
      'Last-Modified': updatedAt.toUTCString()
    })

    assetRes.on('data', (chunk) => {
      res.write(chunk)
    })

    assetRes.on('close', () => {
      res.end()
    })

    assetRes.on('error', () => {
      res.writeHead(500, {
        'Cache-Control': 'text/plain'
      })
      res.end('internal server error')
    })
  })

  assetReq.end()
}

export default handler
