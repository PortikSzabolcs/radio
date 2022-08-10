let cacheName = 'radio-cache-v7';
let urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './serviceWorker.js',
    './img/logo.png',
    './img/favicon-32x32.png',
    './img/apple-touch.png',
    './img/android-chrome.png',
    './img/maskable-icon.png',
    './img/timer.png',
    './img/dark-mode.png'
    ];

self.addEventListener('install', function(event) {
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
        return await caches.match(e.request);
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

