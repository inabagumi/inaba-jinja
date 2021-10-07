import Image from 'next/image'
import kujiImage from '@/assets/kuji.png'
import Page from '@/components/layout'
import Refresh from '@/components/refresh'
import SEO from '@/components/seo'
import SimpleWindow from '@/components/simple-window'
import { getAnyFortuneID } from '@/lib/contentful'
import styles from '@/styles/Lottery.module.css'
import type { GetServerSideProps, NextPage } from 'next'

const DELAY_SECONDS = 2

type Props = {
  id: string
}

const LotteryPage: NextPage<Props> = ({ id }) => {
  return (
    <>
      <SEO noindex path="/lottery" title="おみくじを引いています..." />

      <Refresh delay={DELAY_SECONDS} path={`/kuji/${id}`} />

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
  const id = await getAnyFortuneID()

  return {
    props: {
      id
    }
  }
}
