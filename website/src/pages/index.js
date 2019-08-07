import chunk from 'lodash/chunk'
import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import withBaseUrl from '@docusaurus/withBaseUrl'
import products from '../data/products'

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout description="Haneru Developers はバーチャル YouTuber の因幡はねるさんをテーマとしたアプリやサービスの開発を主として行うコミュニティです。">
      <header className="hero hero--dark">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <Link
              className="button button--primary button--outline button--lg"
              to={withBaseUrl('docs/introduction')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {products && products.length && (
          <section className="container padding--lg">
            {chunk(products, 3).map((row, i) => (
              <div className="row" key={`row-${i}`}>
                {row.map(product => (
                  <div className="col col--4" key={product.website}>
                    <div className="card margin-bottom--md">
                      <div className="card__image">
                        <img alt={product.title} src={product.preview} />
                      </div>
                      <div className="card__body">
                        <h4>{product.title}</h4>
                        <small>{product.description}</small>
                      </div>
                      <div className="card__footer">
                        <div className="button-group button-group--block">
                          <a
                            className="button button--block button--secondary button--small"
                            href={product.website}
                            rel="noopener noreferrer"
                            role="button"
                            target="_blank"
                          >
                            ウェブサイト
                          </a>
                          <Link
                            className="button button--block button--secondary button--small"
                            role="button"
                            to={withBaseUrl(product.learnMore)}
                          >
                            もっと詳しく
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
