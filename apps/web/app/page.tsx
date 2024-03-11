import { type Metadata } from 'next'
import Link from 'next/link'
import { description, title, twitterAccount } from '@/lib/constants'
import Logo from './_components/logo.svg'

export const metadata = {
  alternates: {
    canonical: '/'
  },
  openGraph: {
    description,
    title,
    type: 'website',
    url: '/'
  },
  twitter: {
    card: 'summary_large_image',
    site: `@${twitterAccount}`,
    title
  }
} satisfies Metadata

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center pb-8 pt-20 text-slate-100 md:h-full md:p-4">
      <header className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 pb-12">
        <h1>
          <Logo aria-label={title} className="h-auto w-16 fill-current" />
        </h1>

        <p className="mt-4 font-serif text-sm leading-8 tracking-widest">
          {description}
        </p>
      </header>

      <Link
        className="rounded-md border border-current bg-slate-100/0 px-4 py-2 text-sm leading-6 hover:bg-slate-100/15"
        href="/lottery"
        role="button"
      >
        おみくじを引く
      </Link>
    </main>
  )
}
