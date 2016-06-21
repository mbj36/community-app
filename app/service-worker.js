'use strict';

importScripts('bower_components/sw-toolbox/sw-toolbox.js');
importScripts('cachefiles.js');


toolbox.precache(filesToCache);

self.addEventListener('install', function(event){
	self.skipWaiting();
});

self.addEventListener('activate', function(event){
	event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function(event) {
// console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
console.log(event.request.url);
return response || fetch(event.request);
})
);
});

toolbox.options.debug =true;

/* Helpers */
var respondString = function(string) {
  return function() {
    return new Response(string);
  };
};

var respondOK = respondString('OK');
var respondError = function(reason) {
  return new Response(`Error: ${reason}`, {status: 500});
};

var rewrite = function(find, replace) {
  return function(request, values, options) {
    var req = new Request(request.url.replace(find, replace), request);
    var route = toolbox.router.match(req);
    if (!route) {
      return toolbox.router.default;
    }
    return route(req, values, options);
  }
};

toolbox.router.get(/^https:\/\/demo.openmf.org\/api\/v1\/authentication?username={username}&password={password}/, toolbox.networkFirst);