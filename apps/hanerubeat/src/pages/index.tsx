import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useCallback, useEffect, useState, useRef } from 'react'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import Heart from 'components/heart'
import styles from 'styles/pages/index.module.css'

const Heartbeat: NextPage = () => {
  const heartRef = useRef<HTMLAudioElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [muted, setMuted] = useState<boolean>(true)

  const handleButtonClick = useCallback(() => {
    if (isLoading || !heartRef.current) return

    if (!heartRef.current.paused) {
      heartRef.current.muted = !muted

      setMuted(!muted)
    } else {
      setIsLoading(true)

      const playPromise = heartRef.current.play()

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
        setMuted(heartRef.current.paused)
      }
    }
  }, [muted, isLoading])

  useEffect(() => {
    if (!heartRef.current) return

    const playPromise = heartRef.current.play()

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
      setMuted(heartRef.current.paused)
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
        <Heart ref={heartRef} />

        <div className={styles.controls}>
          <button
            className={styles.button}
            disabled={isLoading}
            onClick={handleButtonClick}
          >
            <ButtonIcon className={styles['button__icon']} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Heartbeat
