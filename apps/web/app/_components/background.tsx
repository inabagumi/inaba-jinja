import Image from 'next/image'
import mainVisual from './main-visual.jpg'

export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 h-full h-lvh">
      <Image
        alt=""
        className="object-cover"
        fill
        placeholder="blur"
        priority
        quality={70}
        sizes="100vw"
        src={mainVisual}
      />
      <div className="absolute inset-0 h-full bg-black/50" />
    </div>
  )
}
