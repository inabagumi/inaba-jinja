import React, { FC } from 'react'
import Layout from '@theme/Layout'

const NotFound: FC = () => (
  <Layout title="ページが見つかりません">
    <div className="container margin-vert--xl">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <h1 className="hero__title">ページが見つかりません</h1>
          <p>お探しのページが見つかりませんでした。</p>
          <p>
            このページにリンクしているサイトの所有者に連絡をしてリンクが壊れていることを伝えてください。
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFound
