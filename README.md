# Visual Field
Explore, Process and Visualize your data right in your browser.

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
