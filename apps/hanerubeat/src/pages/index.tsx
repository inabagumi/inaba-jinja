import styled from '@emotion/styled'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md'

import mp3Path from 'assets/heartbeat.mp3'
import oggPath from 'assets/heartbeat.ogg'
import Heart from 'components/Heart'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
`

const Controls = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
`

const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: #eee;
  display: block;
  font-size: 64px;
  margin: 0;
  padding: 0;

  :focus {
    outline: 0;
  }

  [disabled] {
    color: #aaa;
  }

  svg {
    height: auto;
    width: 1em;
  }
`

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

  return (
    <>
      <NextSeo
        canonical={new URL('/', process.env.NEXT_PUBLIC_BASE_URL).toString()}
        title={process.env.NEXT_PUBLIC_TITLE}
        titleTemplate="%s"
      />

      <Container>
        <Heart />

        <Controls>
          <Button disabled={isLoading} onClick={handleButtonClick}>
            {muted ? <MdVolumeOff /> : <MdVolumeUp />}
          </Button>
        </Controls>

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio crossOrigin="anonymous" loop preload="none" ref={audioRef}>
          <source src={oggPath} type="audio/ogg" />
          <source src={mp3Path} type="audio/mp3" />
        </audio>
      </Container>
    </>
  )
}

export default Heartbeat
