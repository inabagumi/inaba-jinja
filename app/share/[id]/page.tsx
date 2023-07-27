import { notFound, redirect } from 'next/navigation'
import { type Props } from '@/app/(content)/kuji/[id]/page'
import { getFortune } from '@/lib/contentful'

export {
  generateMetadata,
  generateStaticParams,
  revalidate
} from '@/app/(content)/kuji/[id]/page'

export default async function Page({ params }: Props): Promise<never> {
  try {
    await getFortune(params.id)
  } catch {
    notFound()
  }

  redirect('/')
}
