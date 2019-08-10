/* eslint-disable no-console */

async function register(): Promise<void> {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const { Workbox } = await import('workbox-window')
    const wb = new Workbox(`${process.env.BASE_URL}service-worker.js`)

    wb.register()
  }
}

register().catch((error): void => {
  console.error(error)
})
