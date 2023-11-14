import { type FortuneEntry, getFortune } from '@/lib/contentful'

// export const runtime = 'edge'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  let fortune: FortuneEntry

  try {
    fortune = await getFortune(params.id)
  } catch {
    return new Response('not found', {
      status: 404
    })
  }

  return Response.redirect(new URL(`/kuji/${fortune.sys.id}`, request.url))
}
