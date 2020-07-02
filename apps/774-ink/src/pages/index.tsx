import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { cardURL } from '@/assets'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => (
  <>
    <NextSeo
      canonical="https://774.ink/"
      description="もしかして: 774 inc."
      openGraph={{
        images: [
          {
            alt: 'Did you mean: 774 inc.',
            url: `https://774.ink${cardURL}`,
            height: 620,
            width: 1200
          }
        ],
        type: 'website'
      }}
      title="774 ink."
      twitter={{
        cardType: 'summary_large_image'
      }}
    />

    <div className={styles.container}>
      <h1 className={styles.title}>774 ink.</h1>
      <p className={styles.message}>
        <span className={styles.label}>もしかして:&nbsp;</span>
        <a
          className={styles.link}
          href="https://774.ai/"
          rel="noopener noreferrer"
          target="_blank"
        >
          774 inc.
        </a>
      </p>
    </div>
  </>
)

export default Home
