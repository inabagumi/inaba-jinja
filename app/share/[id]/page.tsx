import { notFound } from 'next/navigation'
import { type Props, generateFortuneName } from '@/app/(content)/kuji/[id]/page'
import { type Fortune, getFortune } from '@/lib/contentful'
import DynamicTitle from '@/ui/DynamicTitle'
import Refresh from '@/ui/Refresh'

export {
  generateStaticParams,
  revalidate
} from '@/app/(content)/kuji/[id]/page'

export default async function Page({ params }: Props): Promise<JSX.Element> {
  let fortune: Fortune
  try {
    fortune = await getFortune(params.id)
  } catch {
    notFound()
  }

  const name = generateFortuneName(fortune)

  return (
    <>
      <DynamicTitle>因幡はねるくじ {name}</DynamicTitle>
      <Refresh path="/" />
    </>
  )
}
