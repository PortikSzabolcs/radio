let cacheName = 'radio-cache-v18.4';
let urlsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './img/main-logo.svg',
    './img/favicon-96.png',
    './img/apple-touch.png',
    './img/android-chrome.png',
    './img/maskable-icon.png',
    './img/maskable-grey.svg',
    './img/settings.svg',
    './img/event-icon.svg',
    './img/event-bg.svg',
    './img/star.png',
    './img/star-filled.png',
    './img/website.png'
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
        const r = await caches.match(e.request);
        if (r) { return r; }
        try{
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            console.log(`[Service Worker] Fetching new resource: ${e.request.url}`);
            if(e.request.url.includes("/img/stations")){
                cache.put(e.request, response.clone());
            }
            return response;
        }catch (error){
            console.log(error);
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

