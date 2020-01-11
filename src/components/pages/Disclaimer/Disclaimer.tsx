import React, { FC } from 'react'
import SingleDoc from '../../templates/SingleDoc'

const Disclaimer: FC = () => {
  return (
    <>
      <SingleDoc title="免責事項">
        <p className="text">
          因幡神社は因幡はねるさんのファンによって開発と運用が行われている非公式なウェブページです。このウェブページに対する問い合わせを因幡はねるさんや関連する個人、もしくは団体に対して行うのはお止めください。
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

export default Disclaimer
