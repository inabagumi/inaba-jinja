import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import React from 'react'
import styled, { keyframes } from 'styled-components'

import kujiImage from '@/assets/kuji.png'
import Page from '@/components/Layout'
import Refresh from '@/components/Refresh'
import SimpleWindow from '@/components/SimpleWindow'
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

const LotteryBox = styled.img`
  animation: ${shake} 0.3s infinite alternate linear;
  display: block;
  margin: 0 auto;
  transform: translateY(0) rotate(180deg);
`

type Props = {
  id: string
}

const LotteryPage: NextPage<Props> = ({ id }) => {
  return (
    <>
      <Head>
        <link as="image" href={kujiImage} rel="preload" />
      </Head>

      <NextSeo noindex title="おみくじを引いています..." />

      <Refresh path={`/kuji/${id}`} delay={DELAY_SECONDS} />

      <Page>
        <SimpleWindow>
          <LotteryBox
            alt="くじ引き中..."
            height="290"
            src={kujiImage}
            width="225"
          />
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
