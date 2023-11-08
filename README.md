# Visual Field
Explore, Process and Visualize your data right in your browser.

![Screenshot](https://harrishudson.com/github/vf_snapshot1.png)

## November 2023 Update
As of Chromium version v119 (November 2023), WebSQL appears to now have been deprecated. In order to keep your copy of Visual Field still functioning, you might consider to add a Chrome "Deprecation Trial Token" API string to your http headers (eg, in your .htaccess file) when serving Visual Field from a web server, or to modify your copy of vf.html to add an appropriate meta tag to include a token for your domain. You will need to do this in order to keep your copy of Visual Field still functioning in Chromium based browsers. Please search; "Google Deprecation Trial Token" and register under "WebSQL" for an API token for yourself. Then setup your API token accordingly. You will need a Google account in order to do this. Chromium version v123 (due March 2024) appears to be the final browser release date that WebSQL will be supported in this way. Going forward - What does this mean for Visual Field? The immediate impact is, as from now, and in to the future, will be that running Visual Field as a stand alone html file (eg, loading in a file:// protocol context) will probably no longer work. Harris Hudson, the author of Visual Field, is currently assessing the proposed alternative solution of using SQLite directly as a wasm/javascript port along with local offline file storage. This will be a significant exercise to analyse, assess the feasibility, refactor and add additional code to the existing 23,500 line code base that makes up Visual Field today. If a SQLite wasm/javascript alternative port can be leveraged, then a new release of Visual Field will be targeted hopefully for some time in 2024. Realistically however, this will be unlikely before March 2024. Having said that, if the alternate SQLite wasm/javascript engine does indeed work in a true offline sense - then future possibilities may be encouraging; including broader browser support and access to more SQLite functions within Visual Field. Stay Tuned.

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
