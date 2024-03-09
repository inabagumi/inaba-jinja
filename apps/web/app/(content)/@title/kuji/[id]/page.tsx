import { type Props } from '@/app/(content)/kuji/[id]/page'
import SimpleTitle from '@/components/simple-title'
import { getFortune } from '@/lib/contentful'
import { generateFortuneName } from '@/lib/fortune'

export default async function KujiTitle({
  params
}: Props): Promise<JSX.Element> {
  const fortune = await getFortune(params.id)
  const name = generateFortuneName(fortune)

  return <SimpleTitle>{name}</SimpleTitle>
}
