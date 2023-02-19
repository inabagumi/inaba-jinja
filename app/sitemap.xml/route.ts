import { NextResponse } from 'next/server'
import { getFortuneIDs } from '@/lib/contentful'

type SitemapChangeFreq =
  | 'always'
  | 'daily'
  | 'hourly'
  | 'monthly'
  | 'never'
  | 'weekly'
  | 'yearly'

type SitemapItem = {
  changefreq?: SitemapChangeFreq
  lastmod?: `${number}-${number}-${number}`
  loc: URL
  priority?: number
}

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

class SitemapTransformStream extends TransformStream<SitemapItem, Uint8Array> {
  constructor() {
    const textEncoder = new TextEncoder()

    super({
      flush(controller) {
        controller.enqueue(textEncoder.encode('</urlset>'))
      },
      start(controller) {
        controller.enqueue(
          textEncoder.encode('<?xml version="1.0" encoding="UTF-8"?>')
        )
        controller.enqueue(
          textEncoder.encode(
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
          )
        )
      },
      transform(chunk, controller) {
        const value = [
          '<url>',
          chunk.changefreq && `<changefreq>${chunk.changefreq}</changefreq>`,
          chunk.lastmod && `<lastmod>${chunk.lastmod}</lastmod>`,
          `<loc>${chunk.loc.toString()}</loc>`,
          chunk.priority && `<priority>${chunk.priority.toFixed(1)}</priority>`,
          '</url>'
        ]
          .filter(Boolean)
          .join('')

        controller.enqueue(textEncoder.encode(value))
      }
    })
  }
}

function createSitemapStream(): ReadableStream<Uint8Array> {
  const sitemapStream = new ReadableStream<SitemapItem>({
    async start(controller) {
      for (const sitemapItem of STATIC_PAGES) {
        controller.enqueue(sitemapItem)
      }

      for await (const id of getFortuneIDs()) {
        controller.enqueue({
          changefreq: 'monthly',
          loc: new URL(`/kuji/${id}`, process.env.NEXT_PUBLIC_BASE_URL),
          priority: 0.7
        })
      }

      controller.close()
    }
  }).pipeThrough(new SitemapTransformStream())

  return sitemapStream
}

export function GET(): NextResponse {
  const sitemapStream = createSitemapStream()

  return new NextResponse(sitemapStream, {
    headers: {
      'Cache-Control': 'max-age=604800',
      'Content-Type': 'application/xml'
    }
  })
}
