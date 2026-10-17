// Prova service worker: uygulama kabuğunu ve prototiplerin kullandığı CDN dosyalarını önbelleğe alır.
const VERSION = 'prova-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './ornek.html',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
const RUNTIME = 'prova-runtime';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION && k !== RUNTIME) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  // Kabuk: önce önbellek (çevrimdışı açılış), arkada güncelle
  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate') {
      e.respondWith(caches.match('./index.html').then(r => r || fetch(req)));
      return;
    }
    e.respondWith(caches.match(req).then(r => r || fetch(req)));
    return;
  }

  // Dış kaynaklar (cdnjs, jsdelivr, Google Fonts…): önce ağ, olmazsa önbellek
  const dest = req.destination;
  if (['script', 'style', 'font', 'image'].includes(dest) || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith((async () => {
      const cache = await caches.open(RUNTIME);
      try {
        const res = await fetch(req);
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      } catch (err) {
        const hit = await cache.match(req);
        if (hit) return hit;
        throw err;
      }
    })());
  }
});
