//first Step
// which files are cache in service worker array ma sarii file define kardety han

var cacheName = 'demo-app';
var filesToCache = [
    '/',
    '/app.js',
    '/style.css',
    '/index.html',
];

// then check to Service worker Activate or Not

self.addEventListener('activate', function (e) {
    console.log("[ServiceWorker] Activate");
});

