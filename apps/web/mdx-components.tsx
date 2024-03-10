import { type MDXComponents } from 'mdx/types'
import { MarkdownLink } from '@/components/markdown'

export function useMDXComponents(): MDXComponents {
  return {
    a: MarkdownLink
  }
}
