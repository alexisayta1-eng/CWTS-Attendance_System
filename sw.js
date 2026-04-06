const CACHE_NAME = 'cwts-v2';
const ASSETS = [
    'index.html',
    'admin.html',
    'officer.html',
    'style.css',
    'supabase-config.js',
    'manifest.json'
];

// Force update immediately
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Clear old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            self.clients.claim(),
            caches.keys().then((keys) => {
                return Promise.all(
                    keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
                );
            })
        ])
    );
});

// Network First strategy
self.addEventListener('fetch', (event) => {
    // Only cache GET requests
    if (event.request.method !== 'GET') return;

    // Skip caching for External API calls (Supabase handles its own transport)
    if (event.request.url.includes('supabase.co')) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // If network works, update the cache and return response
                const cln = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, cln));
                return response;
            })
            .catch(() => {
                // If network fails, serve from cache
                return caches.match(event.request);
            })
    );
});
