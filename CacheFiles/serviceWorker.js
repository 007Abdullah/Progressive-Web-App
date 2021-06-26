//first Step
// which files are cache in service worker array ma sarii file define kardety han

var cacheName = 'demo-app';
var filesToCache = [
    '/',
    '/app.js',
    '/style.css',
    '/index.html',
];

// Then check to Service worker Activate or Not

self.addEventListener('activate', function (e) {
    console.log("[ServiceWorker] Activate");
});

// Then install Service Worker jub be install service worker kae bad install wala part chalay
// that mean kae jub be website open ho website kii cache ma ja kar check karna han usko open karna han
// jo files han usma unko cache ma ADD karna han 

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app Shell');
            return cache.addAll(filesToCache);
        })
    );
});

// Then Files Fetch yani kae files get karo 
// OR fetch ma hum ya baat batay han kae humray ab agay humray pass wo files next time 
// majood ho tu waheen cache sa lay warna fetch ko call kar kae lay kar ao

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch :', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
