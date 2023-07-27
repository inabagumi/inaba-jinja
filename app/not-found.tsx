import { type Metadata } from 'next'
import ContentLayout from '@/app/(content)/layout'
import SimpleTitle from '@/components/simple-title'
import { title as siteName } from '@/lib/constants'

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
