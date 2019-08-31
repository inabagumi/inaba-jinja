import styled from '@emotion/styled'
import React, { FC, useCallback, useEffect, useState, useRef } from 'react'
import Heart from 'components/atoms/Heart'
import { ReactComponent as VolumeOff } from './VolumeOff.svg'
import { ReactComponent as VolumeUp } from './VolumeUp.svg'
import mp3Path from './heartbeat.mp3'
import oggPath from './heartbeat.ogg'

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

const Heartbeat: FC = () => {
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
    <Container>
      <Heart />

      <Controls>
        <Button disabled={isLoading} onClick={handleButtonClick}>
          {muted ? <VolumeOff /> : <VolumeUp />}
        </Button>
      </Controls>

      <audio crossOrigin="anonymous" loop preload="none" ref={audioRef}>
        <source src={oggPath} type="audio/ogg" />
        <source src={mp3Path} type="audio/mp3" />
      </audio>
    </Container>
  )
}

export default Heartbeat
