import { type Props, generateFortuneName } from '@/app/(content)/kuji/[id]/page'
import SimpleTitle from '@/components/simple-title'
import { getFortune } from '@/lib/contentful'

export default async function KujiTitle({
  params
}: Props): Promise<JSX.Element> {
  const fortune = await getFortune(params.id)
  const name = generateFortuneName(fortune)

  return <SimpleTitle>{name}</SimpleTitle>
}
