import { title as siteName } from '@/lib/constants'
import SimpleTitle from '@/ui/SimpleTitle'
import PrivacyWrapper from './PrivacyWrapper'

const title = 'プライバシーポリシー'

export const metadata = {
  alternates: {
    canonical: new URL('/privacy', process.env.NEXT_PUBLIC_BASE_URL),
    languages: []
  },
  openGraph: {
    title,
    url: new URL('/privacy', process.env.NEXT_PUBLIC_BASE_URL)
  },
  title,
  twitter: {
    title: `${title} | ${siteName}`
  }
}

export default function Page() {
  return (
    <>
      <SimpleTitle>{title}</SimpleTitle>
      <PrivacyWrapper />
    </>
  )
}
