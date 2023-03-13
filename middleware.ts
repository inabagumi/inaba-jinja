import { type NextRequest, NextResponse, userAgent } from 'next/server'

export const config = {
  matcher: ['/share/:id*']
}

export function middleware(request: NextRequest): NextResponse {
  const ua = userAgent(request)

  if (ua.isBot) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/', request.url))
}
