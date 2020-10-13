import pkg from '../../package.json'

function fullPath(path: string): string {
  return new URL(path, pkg.homepage).toString()
}

export default fullPath
