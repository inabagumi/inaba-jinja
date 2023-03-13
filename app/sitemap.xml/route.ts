import { type SitemapItem, SitemapStream } from 'edge-sitemap'
import { NextResponse } from 'next/server'
import { getFortuneIDs } from '@/lib/contentful'

const STATIC_PAGES: SitemapItem[] = [
  {
    changefreq: 'monthly',
    loc: new URL('/', process.env.NEXT_PUBLIC_BASE_URL),
    priority: 1.0
  },
  {
    changefreq: 'monthly',
    loc: new URL('/about', process.env.NEXT_PUBLIC_BASE_URL),
    priority: 0.5
  },
  {
    changefreq: 'monthly',
    loc: new URL('/privacy', process.env.NEXT_PUBLIC_BASE_URL),
    priority: 0.5
  }
]

export const dynamic = 'force-static'

function createReadableStream(): ReadableStream<SitemapItem> {
  const fortuneIDIterator = getFortuneIDs()

  return new ReadableStream({
    async pull(controller) {
      const { done, value } = await fortuneIDIterator.next()

      if (value) {
        controller.enqueue({
          changefreq: 'monthly',
          loc: `/kuji/${value}`,
          priority: 0.7
        })
      }

      if (done) {
        controller.close()
      }
    },
    start(controller) {
      for (const sitemapItem of STATIC_PAGES) {
        controller.enqueue(sitemapItem)
      }
    }
  })
}

export function GET(): NextResponse {
  const baseURL = new URL(process.env.NEXT_PUBLIC_BASE_URL)
  const body = createReadableStream()
    .pipeThrough(new SitemapStream({ baseURL }))
    .pipeThrough(new TextEncoderStream())

  return new NextResponse(body, {
    headers: {
      'Cache-Control': 'max-age=604800',
      'Content-Type': 'application/xml'
    }
  })
}
