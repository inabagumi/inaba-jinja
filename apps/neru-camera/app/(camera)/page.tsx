import dynamic from 'next/dynamic'

const Camera = dynamic(() => import('./camera'), { ssr: false })

export default function CameraPage(): JSX.Element {
  return <Camera />
}
