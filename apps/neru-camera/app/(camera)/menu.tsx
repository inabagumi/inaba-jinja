'use client'

import '@reach/menu-button/styles.css'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button'
import { useAsset } from './asset'

export default function HeaderMenu() {
  const { assets, setAssetID } = useAsset()

  return (
    <Menu>
      <MenuButton className="m-2 rounded-full p-2 focus:bg-white focus:bg-opacity-25 focus:outline-none">
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
