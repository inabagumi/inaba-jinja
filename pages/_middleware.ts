import type { NextRequest } from 'next/server'

const ACCEPT_IMAGE_TYPES = [
  'image/avif',
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'image/webp'
]

export async function middleware(req: NextRequest): Promise<void | Response> {
  if (req.headers.get('user-agent')?.startsWith('imgix/')) {
    const res = await fetch(req)
    const contentType = res.headers.get('content-type')

    return !!contentType && ACCEPT_IMAGE_TYPES.includes(contentType)
      ? res
      : new Response('Not Found', {
          status: 404,
          statusText: 'Not Found'
        })
  }

  return
}
