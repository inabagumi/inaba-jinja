import { homepage as baseUrl } from '../../package.json'

export default (path: string): string => new URL(path, baseUrl).toString()
