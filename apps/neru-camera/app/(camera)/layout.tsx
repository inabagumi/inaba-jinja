import { type ReactNode } from 'react'
import {
  type OverlayEntry,
  type OverlayFields,
  createClient
} from '@/lib/contentful'
import { AssetProvider } from './asset'
import HeaderMenu from './menu'

async function getAssets(): Promise<OverlayEntry[]> {
  const client = createClient()
  const { items } = await client.getEntries<OverlayFields>({
    content_type: 'overlay',
    limit: 100,
    order: '-sys.createdAt',
    select: ['sys.id', 'fields.keyColor', 'fields.media', 'fields.name'].join(
      ','
    )
  })

  return items
}

type Props = {
  children: ReactNode
}

export default async function CameraLayout({
  children
}: Props): Promise<JSX.Element> {
  const assets = await getAssets()

  return (
    <AssetProvider assets={assets}>
      <header className="fixed flex justify-end text-white top-0 w-full z-10">
        <HeaderMenu />
      </header>

      <main className="bg-black fixed inset-0 z-0">{children}</main>
    </AssetProvider>
  )
}
