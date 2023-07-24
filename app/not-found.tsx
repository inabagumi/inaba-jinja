import { type Metadata } from 'next'
import ContentLayout from '@/app/(content)/layout'
import { title as siteName, themeColor } from '@/lib/constants'
import SimpleTitle from '@/ui/SimpleTitle'

const title = 'ページが見つかりません'

export const metadata: Metadata = {
  title: `${title} - ${siteName}`
}

export default function Page() {
  return (
    <ContentLayout>
      <SimpleTitle>{title}</SimpleTitle>

      <p>申し訳ありませんがお探しのページを見つけられませんでした。</p>
    </ContentLayout>
  )
}
