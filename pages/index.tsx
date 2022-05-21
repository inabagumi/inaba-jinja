import { SkipNavContent } from '@reach/skip-nav'
import { type NextPage } from 'next'
import Link from 'next/link'
import cardImage from '@/assets/card.jpg'
import Logo from '@/assets/vertical-logo.svg'
import Page from '@/components/layout'
import SEO from '@/components/seo'
import styles from '@/styles/Home.module.css'

const description =
  '因幡神社は東京都北区赤羽のどこかにある神社です。有閑喫茶 あにまーれの因幡はねる様をご祭神としてお祀りしています。'

const HomePage: NextPage = () => (
  <>
    <SEO
      description={description}
      image={{
        height: cardImage.height,
        url: cardImage.src,
        width: cardImage.width
      }}
      path="/"
    />

    <Page hideHeader>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <Logo aria-label="因幡神社" className={styles.logo} />
          </h1>

          <p className={styles.description}>{description}</p>
        </header>

        <SkipNavContent />

        <Link className={styles.lotteryButton} href="/lottery" role="button">
          おみくじを引く
        </Link>
      </main>
    </Page>
  </>
)

export default HomePage
