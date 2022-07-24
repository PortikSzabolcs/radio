let cacheName = 'radio-cache';
let urlsToCache = [
    './',
    './index.html',
    './serviceWorker.js',
    './manifest.json',
    './img/logo.png',
    './img/maskable-icon.png',
    ];

self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
  try{
    const r = await fetch(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) { return r; }
    }
    catch(error){
    const response = await caches.match(e.request);
    return response;
    }
  })());
});


self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key === cacheName) { return; }
      return caches.delete(key);
    }))
  }));
});

