'use strict';

importScripts('bower_components/sw-toolbox/sw-toolbox.js');


self.addEventListener('install', function(event){
	self.skipWaiting();
});

self.addEventListener('activate', function(event){
	event.waitUntil(self.clients.claim());
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


toolbox.precache(
	['index.html']);
