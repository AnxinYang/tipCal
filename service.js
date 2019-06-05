const assets = [
    './',
    './main.js',
    './main.css',
    './service.js',
    './manifest.json',
    './images/icons/icon-72x72.png',
    './images/icons/icon-96x96.png',
    './images/icons/icon-128x128.png',
    './images/icons/icon-144x144.png',
    './images/icons/icon-152x152.png',
    './images/icons/icon-192x192.png',
    './images/icons/icon-384x384.png',
    './images/icons/icon-512x512.png',
    'https://use.fontawesome.com/releases/v5.7.0/css/all.css'
];


self.addEventListener('install', function () {
    console.log('Install event at '+ Date.now());
    caches.open('assets')
        .then(function (cache) {
            cache.addAll(assets);
        });
});

self.addEventListener('fetch', function (e) {
    console.log('Fetch event at' + Date.now());
    e.respondWith(async function() {
        // Try to get the response from a cache.
        const cachedResponse = await caches.match(e.request);
        // Return it if we found one.
        if (cachedResponse) return cachedResponse;
        // If we didn't find a match in the cache, use the network.
        return fetch(e.request);
    }());


});
