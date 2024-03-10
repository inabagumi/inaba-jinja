import Image from 'next/image'
import kujiImage from './kuji.png'

export default function Loading(): JSX.Element {
  return (
    <div className="mb-4 mt-8 flex flex-col items-center justify-center">
      <div className="animate-shake mx-auto max-w-full">
        <Image
          alt="くじ引き中..."
          className="h-auto max-w-full"
          height={kujiImage.height / 2}
          priority
          quality={80}
          src={kujiImage}
          width={kujiImage.width / 2}
        />
      </div>
    </div>
  )
}
