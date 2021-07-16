const VERSION = "v1";

self.addEventListener("install", (event) => {
  //self es como el this pero del service worker
  event.waitUntil(precache()); //Espera hasta que el precache se complete
}); //Aqui definimos una lista de recursos que preinstalaremos para que mantenga en cache y asi este material sea utilizado de aqui y no desde la red.

self.addEventListener("fetch", (event) => {
  const request = event.request;
  //get
  if (request.method != "GET") {
    return; //Hacemos esto por si existe alguna discordancia entre el cache y el recurso original de la red, en caso de que sea diferente no se solicitara la cache y se seguira con la red
  }

  // Buscar en cache
  event.respondWith(cachedResponse(request));

  //Actualizar el cache, esto porque si llegaramos a actualizar o modificar los assets en produccion, el programa no actualzaria estos y el usuario se quedaria con una version vieja del cache
  event.waitUntil(updateCache(request))
}); //Hacemos fetch, cuando se realice una solicitud sin red

async function precache() {
  const cache = await caches.open(VERSION); //Abre la version 1, una instancia del cache
  return cache.addAll([
    "/",
    "/index.html",
    "/assets/MediaPlayer.ts",
    "/assets/index.ts",
    "/assets/plugins/AutoPlay.ts",
    "/assets/plugins/AutoPause.ts",
    "/assets/index.css",
    "/assets/ejercicio.mp4",
  ]);
}

async function cachedResponse(request) { //Hacemos la gestion de la cache
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request); //Hacemos esto porque si response no tiene nada almacenado en el cache, entonces se tiene que hacer una solicitud a la red
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response)
} //Asi creamos un doble serviceWorker, uno que actualiza el cache y otro que lanza el cache en caso de necesitarlo