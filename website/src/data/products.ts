/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment */

type Product = {
  description: string
  learnMore: string
  preview: any
  title: string
  website: string
}

const products: Product[] = [
  {
    description:
      '因幡はねるさんと一緒に写真が撮れるアプリです。ねるちゃんとの幸せなひとときをあなたに。',
    learnMore: 'docs/neru-camera',
    preview: require('./showcase/neru-camera.jpg'),
    title: 'ねるカメラ',
    website: 'https://neru.camera/'
  },
  {
    description:
      '好みと推しVTuberを無意識から探るためのアプリです。アナタはどんなオタクタイプ?',
    learnMore: 'docs/animare-shindan',
    preview: require('./showcase/animare-shindan.jpg'),
    title: 'あにまーれ診断',
    website: 'https://shindan.animare.cafe/'
  },
  {
    description:
      '因幡はねるさんの鼓動を感じるためのアプリです。因幡はねるさんの鼓動を感じて、因幡はねるさんに包まれて眠りましょう。',
    learnMore: 'docs/hanerubeat',
    preview: require('./showcase/hanerubeat.jpg'),
    title: 'Haneru Beat!',
    website: 'https://hanerubeat.app/'
  },
  {
    description: '774 inc. 所属タレントの動画を検索できるウェブサービスです。',
    learnMore: 'docs/shinju-date',
    preview: require('./showcase/shinju-date.jpg'),
    title: 'SHINJU DATE',
    website: 'https://shinju.date/'
  },
  {
    description: '因幡神社は東京都北区赤羽のどこかにある神社です。',
    learnMore: 'docs/inaba-jinja',
    preview: require('./showcase/inaba-jinja.jpg'),
    title: '因幡神社',
    website: 'https://inaba-jinja.com/'
  }
]

export default products
