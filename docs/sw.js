const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  // プロジェクトのルートからの相対パスで記述
  '/', // index.htmlへのアクセス（URLがリポジトリ名までの場合）を考慮
  '/index.html',
  '/style.css',
  '/script.mjs',
  '/manifest.json',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

// Service Workerのインストール（キャッシュの保存）
self.addEventListener('install', (event) => {
  console.log('Service Worker: install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: caching app shell');
        return cache.addAll(urlsToCache);
      })
  );
});

// リクエストの傍受とキャッシュからの応答
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュにリソースがあれば、それを返す
        if (response) {
          console.log('Service Worker: found in cache:', event.request.url);
          return response;
        }

        // キャッシュになければ、ネットワークから取得
        console.log('Service Worker: not in cache, fetching from network:', event.request.url);
        return fetch(event.request)
          .then((fetchResponse) => {
            // ネットワークからのレスポンスをキャッシュに追加
            return caches.open(CACHE_NAME)
              .then((cache) => {
                // 不透明なレスポンス（cross-origin）はキャッシュしない
                if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                  return fetchResponse;
                }
                console.log('Service Worker: adding new item to cache:', event.request.url);
                cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
              });
          });
      })
      .catch((error) => {
        console.error('Service Worker: fetch error', error);
      })
  );
});

// 古いキャッシュの削除
self.addEventListener('activate', (event) => {
  console.log('Service Worker: activate event');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});