import dedent from 'dedent'
import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const revalidate = 86_400 // 1 day

export function GET() {
  const sitemapURL = new URL('/sitemap.xml', process.env.NEXT_PUBLIC_BASE_URL)
  const body = dedent`
    User-agent: *
    Disallow:
    Sitemap: ${sitemapURL.toString()}
  `

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8'
    }
  })
}
