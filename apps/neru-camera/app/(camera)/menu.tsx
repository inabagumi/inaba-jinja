'use client'

import '@reach/menu-button/styles.css'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button'
import { useAsset } from './asset'

export default function HeaderMenu(): JSX.Element {
  const { assets, setAssetID } = useAsset()

  return (
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
  )
}
