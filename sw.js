// Insight PWA Service Worker - Cache-Busting & Clean Network-First Strategy
const CACHE_NAME = 'insight-shell-v4';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      // Purge all legacy caches including insight-shell-v1
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Always fetch fresh from network to avoid stale UI caching
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
