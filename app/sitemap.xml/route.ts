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

async function writeSitemap(
  writableStream: WritableStream<SitemapItem>
): Promise<void> {
  const writer = writableStream.getWriter()

  await writer.ready

  const sitemapItems: SitemapItem[] = [...STATIC_PAGES]

  for await (const id of getFortuneIDs()) {
    sitemapItems.push({
      changefreq: 'monthly',
      loc: `/kuji/${id}`,
      priority: 0.7
    })
  }

  try {
    await Promise.all(
      sitemapItems.map((sitemapItem) => writer.write(sitemapItem))
    )
  } finally {
    await writer.close()
  }
}

export function GET(): NextResponse {
  const { readable: smReadable, writable: smWritable } = new SitemapStream({
    baseURL: new URL(process.env.NEXT_PUBLIC_BASE_URL)
  })
  const body = smReadable.pipeThrough(new TextEncoderStream())

  void writeSitemap(smWritable)

  return new NextResponse(body, {
    headers: {
      'Cache-Control': 'max-age=604800',
      'Content-Type': 'application/xml'
    }
  })
}
