import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useCallback, useEffect, useState, useRef } from 'react'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import mp3Path from 'assets/heartbeat.mp3'
import oggPath from 'assets/heartbeat.ogg'
import Heart from 'components/heart'
import styles from 'styles/pages/index.module.css'

const Heartbeat: NextPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [muted, setMuted] = useState<boolean>(true)

  const handleButtonClick = useCallback(() => {
    if (isLoading || !audioRef.current) return

    if (!audioRef.current.paused) {
      audioRef.current.muted = !muted

      setMuted(!muted)
    } else {
      setIsLoading(true)

      const playPromise = audioRef.current.play()

      if (typeof playPromise !== 'undefined') {
        playPromise
          .then(() => {
            setMuted(false)
          })
          .catch(() => {
            setMuted(true)
          })
          .finally(() => {
            setIsLoading(false)
          })
      } else {
        setMuted(audioRef.current.paused)
      }
    }
  }, [muted, isLoading])

  useEffect(() => {
    if (!audioRef.current) return

    const playPromise = audioRef.current.play()

    if (typeof playPromise !== 'undefined') {
      playPromise
        .then(() => {
          setMuted(false)
        })
        .catch(() => {
          setMuted(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setMuted(audioRef.current.paused)
    }
  }, [])

  const ButtonIcon = muted ? MdVolumeOff : MdVolumeUp

  return (
    <>
      <NextSeo
        canonical={new URL('/', process.env.NEXT_PUBLIC_BASE_URL).toString()}
        title={process.env.NEXT_PUBLIC_TITLE}
        titleTemplate="%s"
      />

      <div className={styles.container}>
        <Heart />

        <div className={styles.controls}>
          <button
            className={styles.button}
            disabled={isLoading}
            onClick={handleButtonClick}
          >
            <ButtonIcon className={styles['button__icon']} />
          </button>
        </div>

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio crossOrigin="anonymous" loop preload="none" ref={audioRef}>
          <source src={oggPath} type="audio/ogg" />
          <source src={mp3Path} type="audio/mp3" />
        </audio>
      </div>
    </>
  )
}

export default Heartbeat
