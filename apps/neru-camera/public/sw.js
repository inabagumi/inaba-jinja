self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
  self.registration.unregister().then(() => {
    console.log('unregistered old service worker')
  })
})
