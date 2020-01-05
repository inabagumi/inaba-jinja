import React, { FC } from 'react'
import SingleDoc from '../../templates/SingleDoc'

const Privacy: FC = () => {
  return (
    <>
      <SingleDoc title="プライバシーポリシー">
        <p className="text">
          当ウェブサービスでは
          <a
            href="https://developers.google.com/analytics/?hl=ja"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google アナリティクス
          </a>
          を利用してトラフィックデータの収集を行っています。収集されたトラフィックデータは匿名化され、あなたの個人が特定されることはありません。Google
          アナリティクスの詳細は
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google アナリティクス利用規約
          </a>
          を参照してください。
        </p>
        <p className="text">
          これらの情報の取得はCookieやJavaScriptを無効にすることによって拒否できます。
        </p>
      </SingleDoc>

      <style jsx>{`
        .text {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default Privacy
