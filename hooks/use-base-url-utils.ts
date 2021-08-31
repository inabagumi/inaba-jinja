import pkg from '../package.json'

export type BaseURLUtils = {
  withBaseURL: (path: string) => string
}

export default function useBaseURLUtils(): BaseURLUtils {
  const baseURL = pkg.homepage

  return {
    withBaseURL: (path) => {
      return new URL(path, baseURL).toString()
    }
  }
}
