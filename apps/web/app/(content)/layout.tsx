import Link from 'next/link'
import { type ReactNode } from 'react'
import Logo from '@/components/logo.svg'
import { title as siteName } from '@/lib/constants'

type Props = {
  children: ReactNode
}

export default function ContentLayout({ children }: Props) {
  return (
    <div className="mx-auto grid h-full w-full max-w-screen-md grid-rows-[auto_1fr] py-4 text-slate-100">
      <header className="px-2">
        <Link href="/">
          <Logo
            aria-label={siteName}
            className="block h-8 w-auto fill-current"
          />
        </Link>
      </header>

      <main className="px-2 pt-4">
        <div className="h-full rounded-2xl bg-slate-900/70 p-4 pb-8">
          {children}
        </div>
      </main>
    </div>
  )
}
