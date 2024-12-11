import type { ReactNode } from 'react'
import { type OverlayEntrySkeleton, createClient } from '@/lib/contentful'
import { AssetProvider, type OverlayEntry } from './asset'
import HeaderMenu from './menu'

async function getAssets(): Promise<OverlayEntry[]> {
  const client = createClient()
  const { items } =
    await client.withoutUnresolvableLinks.getEntries<OverlayEntrySkeleton>({
      content_type: 'overlay',
      limit: 100,
      order: ['-sys.createdAt'],
      select: ['sys.id', 'fields.keyColor', 'fields.media', 'fields.name']
    })

  return items
}

export default async function CameraLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const assets = await getAssets()

  return (
    <AssetProvider assets={assets}>
      <header className="fixed top-0 z-10 flex w-full justify-end text-white">
        <HeaderMenu />
      </header>

      <main className="fixed inset-0 z-0 bg-black">{children}</main>
    </AssetProvider>
  )
}
