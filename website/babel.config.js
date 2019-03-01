module.exports = api => {
  api.cache(true)

  return {
    plugins: ['emotion'],
    presets: ['next/babel', '@zeit/next-typescript/babel']
  }
}
