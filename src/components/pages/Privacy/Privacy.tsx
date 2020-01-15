import React, { FC } from 'react'
import SingleDoc from '../../templates/SingleDoc'

const Privacy: FC = () => {
  return (
    <SingleDoc title="プライバシーポリシー">
      <p>
        当ウェブサービスでは
        <a
          href="https://developers.google.com/analytics/?hl=ja"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google アナリティクス
        </a>
        を利用してトラフィックデータを収集しています。収集されたトラフィックデータは匿名化され、あなたの個人が特定されることはありません。Google
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
      <p>
        また
        <a
          href="https://sentry.io/welcome/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sentry
        </a>
        を利用してエラーログの収集しています。収集されたエラーログには個人が特定されるような情報は省略されています。
      </p>
      <p>
        これらの情報の取得はCookieやJavaScriptを無効にすることによって拒否できます。
      </p>
    </SingleDoc>
  )
}

export default Privacy
