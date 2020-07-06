import { NextPage, PageConfig } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'
import { cardURL } from '@/assets'

export const config: PageConfig = {
  amp: true
}

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

    <div className="container">
      <h1 className="title">774 ink.</h1>
      <p className="message">
        <span className="label">もしかして:&nbsp;</span>
        <a
          className="link"
          href="https://774.ai/"
          rel="noopener noreferrer"
          target="_blank"
        >
          774 inc.
        </a>
      </p>
    </div>

    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        padding: 1rem;
        width: 100vw;
      }

      .title {
        display: none;
      }

      .message {
        font-size: 3rem;
        font-weight: 700;
      }

      @media (max-width: 500px) {
        .label,
        .link {
          display: block;
        }
      }
    `}</style>
  </>
)

export default Home
