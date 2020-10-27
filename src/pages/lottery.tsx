import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import styled, { keyframes } from 'styled-components'

import kujiImageURL from '@/assets/kuji.png'
import Page from '@/components/layout'
import Refresh from '@/components/refresh'
import SimpleWindow from '@/components/simple-window'
import getFortunes from '@/contentful/getFortunes'

const DELAY_SECONDS = 2

const shake = keyframes`
  from {
    transform: translateY(0) rotate(180deg);
  }

  to {
    transform: translateY(20px) rotate(170deg);
  }
`

const LotteryBox = styled.div`
  animation: ${shake} 0.3s infinite alternate linear;
  display: block;
  margin: 0 auto;
  max-width: 80%;
  transform: translateY(0) rotate(180deg);
  width: 256px;
`

type Props = {
  id: string
}

const LotteryPage: NextPage<Props> = ({ id }) => {
  return (
    <>
      <NextSeo noindex title="おみくじを引いています..." />

      <Refresh path={`/kuji/${id}`} delay={DELAY_SECONDS} />

      <Page>
        <SimpleWindow>
          <LotteryBox>
            <Image
              alt="くじ引き中..."
              height={580}
              priority
              quality="80"
              sizes="256px"
              src={kujiImageURL}
              width={450}
            />
          </LotteryBox>
        </SimpleWindow>
      </Page>
    </>
  )
}

export default LotteryPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const ids = await getFortunes().catch((): string[] => [])
  const id = ids[Math.floor(Math.random() * ids.length)]

  if (!id) throw new TypeError("Fortune doesn't exist.")

  return {
    props: {
      id
    }
  }
}
