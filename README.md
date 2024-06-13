# Visual Field
Explore, Process and Visualize your data right in your browser.

![Screenshot](https://harrishudson.com/github/vf_snapshot1.png)

## June 2024 Update

### RIP WebSQL

WebSQL was a HTML standards technology simply ahead of its time.

With the recent release of Chromium v125 in June 2024, WebSQL appears to have now been fully deprecated in Chromium based browsers.  A shenanigans of a deprecation trial commenced in Chromium v119 in November 2023 - where the ultimate doomed fate of WebSQL was set.  Now, mainstream browsers are unlikely to support WebSQL going forward.  WebSQL was always a hot potato and a political mess in terms of HTML standards.  Granted - there was merit to the fact that WebSQL should perhaps not have been based on a specific underlying technology.  And yes, there were security issues with the underlying implementation of WebSQL.  However, such security issues were never truly addressed.  Instead, those WebSQL components with security vulnerabilities were simply progressively removed or omitted from the browser.  Instead of addressing the core problems, functionality of WebSQL was progressively removed from browsers since its introduction in 2009 to a point the technology was mangled and almost rendered hopeless.  You can see a rant by the author, Harris Hudson - see "Get Involved" section below.  Now, SQLite as a wasm port has been put forward as the replacement to WebSQL by the browser developer community.  And in certain respects, that has a promising future - although anecdotally there may be use cases where it doesn't quite match the performance of WebSQL particularly for complex joins of large datasets.  But even if SQLite wasm is a workable alternative - it misses the primary point when it comes to HTML web standards.  The need for a HTML standards based relational database built natively in to the browser still exists today (June 2024).  Yes, WebSQL might have been becoming unmanageable but now, a SQLite wasm port doesn't solve this need for standards.  Where are the standards?  Hopefully sometime in the future there will come a time again when the broader community can realize that a standards based relational (probably SQL) engine built into browsers will be a positive move.  Not everyone is a javascript programmer and that fact appears to be overlooked by the browser developer community.  WebSQL enabled the end user to interact with the storage layers using SQL.  The Web Ecosystem continues to evolve and large CORS enabled open relational datasets are now ubiquitous on the web.  Yes, WebSQL was not perfect - but the political mess and the mangling by successive removal of its technology components from browsers over the years since its introduction and ultimate deprecation - well, that was simply an abomination!  Harris Hudson, the author of Visual Field, is currently looking into porting Visual Field to a SQLite wasm port, but with such a large code base - this is a significant undertaking.  If Harris can rework Visual Field as a SQLite wasm port - there would be the potential for a more broader browser base support.  Although such a port still won't address the elephant in the room - that is the glaring omission of HTML standards for a browser based relational database.  Stay tuned.

Whilst not really recommending the use of older software, if you would like to see the following WebSQL Visual Field examples below in the page function correctly, you may need to use an older browser that supports WebSQL.  For Chromium based browsers, you will need to look at a version prior to version v119 - when the deprecation trial shenanigans began for WebSQL.  A possible commit token for an arbitrary Chromium v118 version (prior to the WebSQL deprecation) is **1185669**.  Whilst not associated with this website in any way, if you would like to see the examples below in action, you may be able to download an older Chromium based browser supporting WebSQL from here; 

[https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html](https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html)

For example;
- Windows x86 download; [https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win_x64/1185669/](https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Win_x64/1185669/)
- Linux x64 Build download; [https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Linux_x64/1185669/](https://commondatastorage.googleapis.com/chromium-browser-snapshots/index.html?prefix=Linux_x64/1185669/)


## Demo
Visual Field Examples: [https://visualfield.org/](https://visualfield.org/).

## Requirements
Requires a HTML5 and WebSQL enabled browser.

## Application Usage
Visual Field is intended to be able to be used in any of the following ways;

- Online Web Application
- Offline Web Application
- As a stand alone html file
- As an Installed Progressive Web Application

### Online Web Application
For an online web application, just install the vf.html file in your 
intended web server directory.  This will allow Visual Field on your 
web server to be used in an online way.

### Offline Web Application
For an offline web application, you will need to install both 
vf.html and the vf_service_worker.js files in your intended web 
server directory.  This will allow Visual Field to be loaded in a 
browser even if your users do not have an internet connection 
(after initial load).  Both the vf.hml and vf_service_worker.js 
will need to reside in the same directory.

### As a stand alone html file
Visual Field can function as a stand alone html file just by loading the 
vf.html file in your browser using a file:// protocol context.  That is,
no web server is necessary to use the full functions of Visual Field.  This 
usage option may be useful if you are unable to install Visual Field on 
a web server or unable to install it as a Progressive Web Application.

### As an Installed Progressive Web Application
Progressive Web Applications are intended to be able to be installed on 
your device by using HTML component "Add to Home Screen" (A2HS).  As of 
version 3.1.0, Visual Field is typically able to be installed on your device 
by a simple click on the "Install" option under the "Help" tab.  This 
enables a quick, simple, non-technical install of Visual Field on to your 
users device.  In order to support Visual Field as a Progressive Web 
Application, you will need to place vf.html, vf_service_worker.js,
vf.webmanifest and the favicon.svg all 4 files on to your web server in 
the same directory.  Should all these files be installed on your web server, 
and your web server can serve these over https, then end users should be 
able to successfully invoke the "Install" option to add Visual Field to their 
device as an installed Progressive Web Application.  Ie, a simple, 
non-technical, install on their device.

## Unit Test
A script test/vf_unit_test.js is provided in the test subdirectory.  Please
refer to instructions within this file as how to conduct some unit tests
of some built-in Custom Functions within Visual Field.  This requires temporarily
editing the vf.html file and adding a script reference to the 'test/vf_unit_test.js"
javascript file.  The test/vf_unit_test.js file does not need to be deployed
with your normal deployment of Visual Field.  It is provided here for testing
and diagnosing possible issues with Custom Functions. 

## Dependencies
- Turf
- Leaflet
- Leaflet.markercluster
- Leaflet.heat
- Moment
- Chartjs
- Hammerjs
- Chartjs-plugin-zoom
- ExifReader
- Visjs Network
- Proj4js
- jQuery.csv
- Words double-metaphone
- Words stemmer
- Wellknown
- Distance Vincenty
- Font Awesome

## Author 
Harris Hudson

## Contributing
Pull Requests are not currently being accepted.  If you would like to 
request a change, please raise an issue.

## Donate
Donation and Sponsorship opportunities are available.  Please contact the
author directly.
