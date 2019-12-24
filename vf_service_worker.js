'use strict';

var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};

const offlineUrl = 'vf.html';
const offlineUrls = [
'vf.html',
'https://npmcdn.com/@turf/turf@5.1.6/turf.min.js',
'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',
'https://unpkg.com/leaflet@1.6.0/dist/leaflet.js',
'https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.4.1/dist/leaflet.markercluster-src.min.js',
'https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css',
'https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.4.1/dist/MarkerCluster.css',
'https://cdn.jsdelivr.net/npm/leaflet-easybutton@2.4.0/src/easy-button.css',
'https://cdn.jsdelivr.net/npm/leaflet-easybutton@2.4.0/src/easy-button.js',
'https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.css',
'https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js',
'https://cdn.jsdelivr.net/npm/jquery-csv@1.0.5/src/jquery.csv.min.js',
'https://cdn.jsdelivr.net/npm/stemmer@1.0.4/index.min.js',
'https://cdn.jsdelivr.net/npm/double-metaphone@1.0.4/index.min.js',
'https://cdn.jsdelivr.net/npm/wellknown@0.5.0/index.min.js',
'https://cdn.jsdelivr.net/npm/node-vincenty@0.0.6/vincenty.min.js',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.eot',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.svg',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.ttf',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.woff',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.woff2',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0', 
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0',
'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0'
];

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function(cache) {
      return cache.addAll(offlineUrls); 
    })
  );
});

this.addEventListener('fetch', event => {
  // request.mode = navigate isn't supported in all browsers
  // so include a check for Accept: text/html header.
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
          fetch(event.request.url).catch(error => {
              // Return the offline page
              return caches.match(offlineUrl);
          })
    );
  }
  else{
        // Respond with everything else if we can
        event.respondWith(caches.match(event.request)
                        .then(function (response) {
                        return response || fetch(event.request);
                    })
            );
      }
});

