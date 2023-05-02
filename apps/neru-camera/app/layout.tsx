import 'tailwindcss/tailwind.css'
import { Analytics } from '@vercel/analytics/react'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'
import { title } from '@/lib/constants'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
    : null,
  title: {
    default: title,
    template: `%s - ${title}`
  }
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <head />
      <body>
        {children}

        <Analytics />
      </body>
    </html>
  )
}
