import { notFound } from 'next/navigation'
import { type Props } from '@/app/(content)/kuji/[id]/page'
import { getFortune } from '@/lib/contentful'
import Refresh from '@/ui/Refresh'

export { revalidate } from '@/app/(content)/kuji/[id]/page'

export default async function Page({ params }: Props): Promise<JSX.Element> {
  try {
    await getFortune(params.id)
  } catch {
    notFound()
  }

  return <Refresh path="/" />
}
