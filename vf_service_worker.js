'use strict';

var cacheVersion = 'vf3.2.0_version_002';
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};

const offlineUrl = 'vf.html';
const offlineUrls = [
 'vf.html',
 'favicon.svg',
 'vf.webmanifest',
 'https://unpkg.com/@turf/turf@6.5.0/turf.min.js', 
 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css',
 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js',
 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
 'https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.5.0/dist/leaflet.markercluster.js',
 'https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.5.0/dist/MarkerCluster.Default.css',
 'https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.5.0/dist/MarkerCluster.css',
 'https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.css',
 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js',
 'https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js',
 'https://cdn.jsdelivr.net/npm/hammerjs@2.0.8/hammer.min.js', 
 'https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@0.7.7/dist/chartjs-plugin-zoom.min.js', 
 'https://cdn.jsdelivr.net/npm/exifreader@3.16.0/dist/exif-reader.js',
 'https://unpkg.com/vis-network@9.0.4/dist/vis-network.min.js',
 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.heat/0.2.0/leaflet-heat.js',
 'https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.7.2/proj4.js',
 'https://cdn.jsdelivr.net/npm/jquery-csv@1.0.21/src/jquery.csv.js',
 'https://cdn.jsdelivr.net/npm/stemmer@1.0.5/index.js', 
 'https://cdn.jsdelivr.net/npm/double-metaphone@1.0.5/index.js', 
 'https://cdn.jsdelivr.net/npm/wellknown@0.5.0/index.js', 
 'https://cdn.jsdelivr.net/npm/node-vincenty@0.0.6/vincenty.js', 
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
 if (event.request.mode==='navigate'||(event.request.method==='GET'&&event.request.headers.get('accept').includes('text/html'))) {
  event.respondWith(
  fetch(event.request.url).catch(error => {
   // Return the offline page
   return caches.match(offlineUrl,{ignoreSearch:true});
   })
  );
 }
 else{
  // Respond with everything else if we can
  event.respondWith(caches.match(event.request,{ignoreSearch:true})
   .then(function (response) {
    return response || fetch(event.request);
   })
  );
 }
});
