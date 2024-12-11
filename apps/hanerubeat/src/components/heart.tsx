import { type ComponentProps } from 'react'
import { MdFavorite } from 'react-icons/md'

import mp3Path from 'assets/heartbeat.mp3'
import oggPath from 'assets/heartbeat.ogg'
import captionPath from 'assets/heartbeat.vtt'
import styles from 'styles/components/heart.module.css'

export default function Heart({ ref }: ComponentProps<'audio'>) {
  return (
    <>
      <MdFavorite className={styles.heart} />

      <audio
        crossOrigin="anonymous"
        loop
        preload="none"
        // @ts-expect-error `@types/react`のバージョン齟齬。全部v19.xにそろえられれば解決するはず。
        ref={ref}
      >
        <source src={oggPath} type="audio/ogg" />
        <source src={mp3Path} type="audio/mp3" />
        <track default kind="captions" src={captionPath} srcLang="ja" />
      </audio>
    </>
  )
}
