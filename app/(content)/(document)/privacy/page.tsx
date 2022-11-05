import DynamicTitle from '@/ui/DynamicTitle'
import SimpleTitle from '@/ui/SimpleTitle'
import PrivacyWrapper from './PrivacyWrapper'

export default function Page(): JSX.Element {
  return (
    <>
      <DynamicTitle>プライバシーポリシー</DynamicTitle>
      <SimpleTitle>プライバシーポリシー</SimpleTitle>
      <PrivacyWrapper />
    </>
  )
}
