import './styles/app.scss'

async function main() {
  const { init } = await import(/* webpackChunkName: 'init' */ './init-app')

  await init()
}

main().catch(error => console.error(error))
