import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import MoreIcon from '@material-ui/icons/MoreVert'
import type { GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { useCallback, useState } from 'react'
import Meta from '../components/meta'
import contentfulClient from '../contentfulClient'
import type { OverlayEntry, OverlayFields } from '../types/Overlay'

const Camera = dynamic(() => import('../components/camera'), { ssr: false })

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  container: {
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0
  },
  toolbar: {
    justifyContent: 'flex-end'
  }
})

type Props = {
  assets: OverlayEntry[]
}

const Index: NextPage<Props> = ({ assets }) => {
  const [assetId, setAssetId] = useState<string>()
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()
  const classes = useStyles()

  const handleClick = useCallback(
    (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
      setAnchorEl(event.currentTarget)
    },
    []
  )

  const handleClose = useCallback(() => {
    setAnchorEl(undefined)
  }, [])

  const changeAsset = useCallback(
    (event: ReactMouseEvent<HTMLLIElement, MouseEvent>) => {
      setAnchorEl(undefined)

      const target = event.currentTarget
      const id = target.getAttribute('data-asset-id')

      if (id) setAssetId(id)
    },
    []
  )

  const asset = assetId
    ? assets.find((entry) => entry.sys.id === assetId)
    : assets[assets.length - 1]

  return (
    <>
      <Meta />

      <AppBar className={classes.appBar} color="inherit" position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-controls="change-menu"
            aria-haspopup="true"
            aria-label="メニューを開く"
            color="inherit"
            edge="end"
            onClick={handleClick}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            id="change-menu"
            anchorEl={anchorEl}
            keepMounted
            open={!!anchorEl}
            onClose={handleClose}
          >
            {assets.map((asset, index) => {
              const selected = assetId
                ? asset.sys.id === assetId
                : index === assets.length - 1

              return (
                <MenuItem
                  data-asset-id={asset.sys.id}
                  key={asset.sys.id}
                  onClick={changeAsset}
                  selected={selected}
                >
                  {asset.fields.name}
                </MenuItem>
              )
            })}
          </Menu>
        </Toolbar>
      </AppBar>

      <main className={classes.container}>
        <Camera asset={asset} />
      </main>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps<Props> = async () => {
  const entries = await contentfulClient
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
    }
  }
}
