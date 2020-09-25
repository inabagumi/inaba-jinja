import { homepage as baseUrl } from '../../package.json'

function fullPath(path: string): string {
  return new URL(path, baseUrl).toString()
}

export default fullPath
