import Skeleton from '@inaba-jinja/components/skeleton'
import SimpleTitle from '@/components/simple-title'

export default function KujiLoading() {
  return (
    <>
      <SimpleTitle>
        <Skeleton className="h-4 w-24" />
      </SimpleTitle>

      <div className="flex items-center justify-center">
        <Skeleton className="block h-[540px] w-[254px]" />
      </div>

      <nav className="mt-12">
        <ul className="flex items-center justify-center">
          <li>
            <span className="pointer-events-none inline-block rounded-full bg-[#0f1419] px-6 py-2 text-sm font-semibold tracking-wide text-white opacity-50">
              Xに共有する
            </span>
          </li>
        </ul>
      </nav>
    </>
  )
}
