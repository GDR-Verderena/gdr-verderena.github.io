---
layout: null
---

   
   
   
   
const OFFLINE_VERSION = 1;
const CACHE_OFFLINE = 'offline';
// Customize this with a different URL if needed.
const OFFLINE_URL = '/offline.html';



self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_OFFLINE);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
  })());
});



self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});




self.addEventListener('fetch', (event) => {
     // We only want to call event.respondWith() if this is a GET request for an HTML document.

    
   
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  
   //if (event.request.mode === 'navigate' && event.request.method === 'GET' &&
    //  event.request.headers.get('accept').indexOf('text/html') !== -1) {
   
   if (event.request.mode === 'navigate'){
     console.log('Handling fetch event for', event.request.url);
    event.respondWith((async () => {
      try {
        // First, try to use the navigation preload response if it's supported.
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        // catch is only triggered if an exception is thrown, which is likely
        // due to a network error.
        // If fetch() returns a valid HTTP response with a response code in
        // the 4xx or 5xx range, the catch() will NOT be called.
        console.log('Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_OFFLINE);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }

  // If our if() condition is false, then this fetch handler won't intercept the
  // request. If there are any other fetch handlers registered, they will get a
  // chance to call event.respondWith(). If no fetch handlers call
  // event.respondWith(), the request will be handled by the browser as if there
  // were no service worker involvement.
});



///END OFFLINE



   
   
   
   
var urlsToCache = [
   
  '/',
  '/js/index.js',
  '/css/main.css',
  '/blog',
  '/about',
  '/contact'
 // '/index.html',
 // '/blog/index.html',
 
 


];

// Cache posts
// Limits the number of posts that gets cached to 3
// Reads a piece of front-matter in each post that directs the second loop to the folder where the assets are held
{% for post in site.posts limit: 5 %}
    urlsToCache.push("{{ post.url }}");
    {% for file in site.static_files %}
        {% if file.path contains post.assets %}
            urlsToCache.push("{{ file.path }}");
        {% endif %}
    {% endfor %}
{% endfor %}

var CACHE_NAME = 'gdr-verderena-{{ site.time }}';

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                 console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
     // We only want to call event.respondWith() if this is a GET request for an HTML document.
//  if (event.request.method === 'GET' &&
  //    event.request.headers.get('accept').indexOf('text/html') !== -1) {
   var req = event.request.clone();
    
    console.log('Handling fetch event for', event.request.url);
       if (req.clone().method == "GET") {
    event.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
          
       }
     
 // }
});

self.addEventListener('fetch', function (event) {
      var req = event.request.clone();
    
   
       if (req.clone().method == "GET") {
          
    event.respondWith(
        caches.open(CACHE_NAME).then(function (cache) {
            return fetch(event.request).then(function (response) {
                cache.put(event.request, response.clone());
                return response;
            });
        })
    );
       }
});
 
 
/* 
 
 self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
*/

 

 
 
 
 /*
 
 
if ('storage' in navigator && 'estimate' in navigator.storage) {
  navigator.storage.estimate().then(({usage, quota}) => {
    console.log(`Using ${usage} out of ${quota} bytes.`);
  });
}
*/

 
 
  
 /**** START notificationclose ****/
 self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});
  
 /**** END notificationclose ****/
 
 
 
 /**** START notificationActionClickEvent ****/
self.addEventListener('notificationclick', function(event) {
  if (!event.action) {
    // Was a normal notification click
     
    console.log('Notification Click.');
       clients.openWindow('https://gdrverderena.pt/blog').then(function(client){
       client.navigate('https://gdrverderena.pt/blog');
      });
    return;
  }

  switch (event.action) {
    case 'coffee-action':
      console.log('User ❤️️\'s coffee.');
     // self.open('https://gdrverderena.pt/', '_blank');
      clients.openWindow('https://gdrverderena.pt/');

      break;
    case 'doughnut-action':
      console.log('User ❤️️\'s doughnuts.');
      clients.openWindow('https://www.facebook.com/G-D-R-Verderena-356445604388109/').then(function(client){
       client.navigate('https://www.facebook.com/G-D-R-Verderena-356445604388109/');
      });
      break;
    case 'gramophone-action':
      console.log('User ❤️️\'s music.');
      break;
    case 'atom-action':
      console.log('User ❤️️\'s science.');
      break;
    default:
      console.log(`Unknown action clicked: '${event.action}'`);
      break;
  }
});
/**** END notificationActionClickEvent ****/
 
 
 
 
 
 
 
 
 
 if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
  return;
}
 else{
 /**** START createDB ****/
 
 
 function createDB() {
  idb.open('products', 1, function(upgradeDB) {
    var store = upgradeDB.createObjectStore('beverages', {
      keyPath: 'id'
    });
    store.put({id: 123, name: 'coke', price: 10.99, quantity: 200});
    store.put({id: 321, name: 'pepsi', price: 8.99, quantity: 100});
    store.put({id: 222, name: 'water', price: 11.99, quantity: 300});
  });
}
 
 
 
 self.addEventListener('activate', function(event) {
  event.waitUntil(
    createDB()
  );
});
 
 
 
 
 
 function readDB() {
  idb.open('products', 1).then(function(db) {
    var tx = db.transaction(['beverages'], 'readonly');
    var store = tx.objectStore('beverages');
    return store.getAll();
  }).then(function(items) {
    // Use beverage data
  });
}
 
 
 
 
 
  /**** END createDB ****/
 }
