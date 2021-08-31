import getClient from './getClient'

export default async function getFortunes(): Promise<string[]> {
  const entries = await getClient().getEntries<undefined>({
    content_type: 'fortune',
    limit: 100,
    select: 'sys.id'
  })

  return entries.items.map((item) => item.sys.id)
}
