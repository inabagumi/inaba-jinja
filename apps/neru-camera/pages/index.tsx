import '@reach/menu-button/styles.css'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button'
import { type GetStaticProps, type NextPage } from 'next'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import {
  type OverlayEntry,
  type OverlayFields,
  createClient
} from '../lib/contentful'

const Camera = dynamic(() => import('../components/camera'), { ssr: false })

type Props = {
  assets: OverlayEntry[]
}

const Index: NextPage<Props> = ({ assets }) => {
  const [assetID, setAssetID] = useState<string>()

  const asset = assetID
    ? assets.find((entry) => entry.sys.id === assetID)
    : assets[assets.length - 1]

  return (
    <>
      <NextSeo
        canonical={
          process.env.NEXT_PUBLIC_BASE_URL &&
          `${process.env.NEXT_PUBLIC_BASE_URL}/`
        }
      />

      <header className="fixed flex justify-end text-white top-0 w-full z-10">
        <Menu>
          <MenuButton className="focus:bg-opacity-25 focus:bg-white m-2 focus:outline-none p-2 rounded-full">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </MenuButton>
          <MenuList className="p-0">
            {assets.map((asset) => (
              <MenuItem
                data-asset-id={asset.sys.id}
                key={asset.sys.id}
                onSelect={() => setAssetID(asset.sys.id)}
              >
                {asset.fields.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </header>

      <main className="bg-black fixed inset-0 z-0">
        <Camera asset={asset} />
      </main>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = createClient()
  const entries = await client
    .getEntries<OverlayFields>({
      content_type: 'overlay',
      limit: 100,
      order: '-sys.createdAt',
      select: ['sys.id', 'fields.keyColor', 'fields.media', 'fields.name'].join(
        ','
      )
    })
    .catch(() => null)
  const assets = entries?.items || []

  return {
    props: {
      assets
    },
    revalidate: 60
  }
}
