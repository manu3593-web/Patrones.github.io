const CACHE_NAME = 'pattern-pro-v1.1'; // Incrementa esto cuando edites el HTML
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// INSTALACIÓN: Crea el caché inicial
self.addEventListener('install', (evt) => {
  self.skipWaiting(); // Fuerza a que el nuevo SW tome el control de inmediato
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// ACTIVACIÓN: Limpia cachés antiguos de versiones anteriores
self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
      );
    })
  );
});

// ESTRATEGIA: Network First (Red primero) para el HTML principal
// Esto asegura que si hay internet, el usuario vea las mejoras que hagas.
self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    fetch(evt.request).catch(() => {
      return caches.match(evt.request);
    })
  );
});