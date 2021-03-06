import type { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'

import kujiImage from '@/assets/kuji.png'
import Page from '@/components/layout'
import Refresh from '@/components/refresh'
import SEO from '@/components/seo'
import SimpleWindow from '@/components/simple-window'
import getFortunes from '@/contentful/getFortunes'
import styles from '@/styles/pages/lottery.module.css'

const DELAY_SECONDS = 2

type Props = {
  id: string
}

const LotteryPage: NextPage<Props> = ({ id }) => {
  return (
    <>
      <SEO noindex path="/lottery" title="おみくじを引いています..." />

      <Refresh path={`/kuji/${id}`} delay={DELAY_SECONDS} />

      <Page>
        <SimpleWindow>
          <div className={styles.content}>
            <div className={styles.lotteryBox}>
              <Image
                alt="くじ引き中..."
                height={kujiImage.height / 2}
                priority
                quality={80}
                src={kujiImage}
                width={kujiImage.width / 2}
              />
            </div>
          </div>
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
