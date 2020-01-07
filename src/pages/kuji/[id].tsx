import * as contentful from 'contentful'
import { NextPage } from 'next'
import React from 'react'
import Meta from '../../components/atoms/Meta'
import Fortune from '../../components/pages/Fortune'
import FortuneFields from '../../types/FortuneFields'
import Error from '../_error'

type Props = {
  fortune?: contentful.Entry<FortuneFields>
}

const KujiPage: NextPage<Props> = ({ fortune }) => {
  if (!fortune) return <Error statusCode={404} />

  return (
    <>
      <Meta
        description={fortune.fields.description}
        image={fortune.fields.card.fields.file.url}
        pathname={`/kuji/${fortune.sys.id}`}
        title={`${fortune.fields.blessing} - 因幡はねるくじ`}
      />

      <Fortune fortune={fortune} />
    </>
  )
}

KujiPage.getInitialProps = async ({ query }): Promise<Props> => {
  if (
    !process.env.CONTENTFUL_ACCESS_TOKEN ||
    !process.env.CONTENTFUL_SPACE_ID
  ) {
    return {}
  }

  const id = Array.isArray(query.id) ? query.id[0] : query.id
  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID
  })
  const fortune = await client
    .getEntry<FortuneFields>(id)
    .catch(() => undefined)

  return { fortune }
}

export default KujiPage
