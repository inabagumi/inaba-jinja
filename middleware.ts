import { NextResponse, userAgent } from 'next/server'

export const config = {
  matcher: ['/share/:id*']
}

export function middleware(request: Request): Response {
  const ua = userAgent(request)

  if (ua.isBot) {
    return NextResponse.next()
  }

  return Response.redirect(new URL('/', request.url))
}
