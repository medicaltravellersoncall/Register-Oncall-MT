const CACHE = 'mt-oncall-v2';
const ASSETS = [
  './',
  './index.html',
];

// Optional assets - cached if available, won't block install if missing
const OPTIONAL_ASSETS = [
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(async c => {
      // Cache required assets (must succeed)
      await c.addAll(ASSETS).catch(() => {});
      // Cache optional assets individually (ignore failures)
      for (const url of OPTIONAL_ASSETS) {
        await c.add(url).catch(() => {});
      }
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Only handle same-origin GET requests
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache successful responses
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone)).catch(() => {});
        }
        return response;
      }).catch(() => cached); // fallback to cache if offline
    })
  );
});
