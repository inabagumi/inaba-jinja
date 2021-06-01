import { FortuneEntry } from '@/types/fortune'

import useBlurDataURL from './use-blur-data-url'

export default function useBlurKujiURL(fortune: FortuneEntry): string {
  const width =
    (fortune.fields.paper.fields.file.details.image?.width ?? 508) / 2
  const height =
    (fortune.fields.paper.fields.file.details.image?.height ?? 1080) / 2

  return useBlurDataURL(fortune.fields.prePaper, width, height)
}
