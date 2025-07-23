const CACHE_NAME = 'donna-tartt-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/secret-history.html',
  '/little-friend.html',
  '/goldfinch.html',
  // Добавьте сюда пути ко всем изображениям и другим ресурсам
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});