import type { ForwardRefRenderFunction } from 'react'
import { forwardRef } from 'react'
import { MdFavorite } from 'react-icons/md'

import mp3Path from 'assets/heartbeat.mp3'
import oggPath from 'assets/heartbeat.ogg'
import captionPath from 'assets/heartbeat.vtt'
import styles from 'styles/components/heart.module.css'

const Heart: ForwardRefRenderFunction<HTMLAudioElement> = (_props, ref) => {
  return (
    <>
      <MdFavorite className={styles.heart} />

      <audio crossOrigin="anonymous" loop preload="none" ref={ref}>
        <source src={oggPath} type="audio/ogg" />
        <source src={mp3Path} type="audio/mp3" />
        <track default kind="captions" src={captionPath} srcLang="ja" />
      </audio>
    </>
  )
}

export default forwardRef(Heart)
