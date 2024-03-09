import { type MDXComponents } from 'mdx/types'
import { MarkdownEmphasis, MarkdownLink } from '@/components/markdown'

export function useMDXComponents(): MDXComponents {
  return {
    a: MarkdownLink,
    em: MarkdownEmphasis
  }
}
