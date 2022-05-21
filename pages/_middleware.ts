import { type NextMiddleware, NextResponse } from 'next/server'

const ACCEPT_IMAGE_TYPES = [
  'image/avif',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/webp'
]

const middleware: NextMiddleware = async (req) => {
  if (req.ua?.ua.startsWith('imgix/')) {
    const res = await fetch(req)
    const contentType = res.headers.get('content-type')

    return contentType && ACCEPT_IMAGE_TYPES.includes(contentType)
      ? res
      : new Response('Not Found', {
          status: 404,
          statusText: 'Not Found'
        })
  }

  return NextResponse.next()
}

export default middleware
