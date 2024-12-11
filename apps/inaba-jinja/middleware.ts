import { type NextRequest, userAgent } from 'next/server'

export const config = {
  matcher: ['/share/:id*']
}

export function middleware(request: NextRequest) {
  const ua = userAgent(request)

  if (!ua.isBot) {
    return Response.redirect(new URL('/', request.url))
  }
}
