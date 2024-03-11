import Link from 'next/link'
import { type ReactNode } from 'react'
import Logo from '@/components/logo.svg'
import { title as siteName } from '@/lib/constants'

type Props = {
  children: ReactNode
  title: ReactNode
}

export default function ContentLayout({ children, title }: Props) {
  return (
    <div className="mx-auto w-full max-w-screen-md py-4 text-slate-100">
      <header className="px-2">
        <Link href="/">
          <Logo
            aria-label={siteName}
            className="block h-8 w-auto fill-current"
          />
        </Link>
      </header>

      <main className="px-2 pt-4">
        <div className="rounded-2xl bg-slate-900/70 p-4 pb-8">
          {title}
          {children}
        </div>
      </main>
    </div>
  )
}
