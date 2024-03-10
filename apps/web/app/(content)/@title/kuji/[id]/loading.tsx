import Skeleton from '@inaba-jinja/components/skeleton'
import SimpleTitle from '@/components/simple-title'

export default function KujiTitle(): JSX.Element {
  return (
    <SimpleTitle>
      <Skeleton className="h-4 w-24" />
    </SimpleTitle>
  )
}
