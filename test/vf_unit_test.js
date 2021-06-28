/* -----------------------------------------------------------------
 * ATTN:  This file does NOT need to be deployed with your 
 *        Visual Field install.  This file is included in the
 *        repo to assist with unit tests of a subset of some of
 *        the Custom Functions that are built into Visual Field.
 *        To run these test cases, just follow these instructions;
 *
 * Testing Instructions;
 *
 * 1. Temporarily edit your vf.html file and add, or uncomment,
 *    the following at the VERY BOTTOM of the vf.html file;
 *
 *    <script src="test/vf_unit_test.js"/></script>
 *
 * 2. Load vf.html in your browser and check the console for any
 *    noted test case failures of the Custom Functions built in
 *    to Visual Field that are tested as part of this unit test.
 *    Any funciton failures may need to be examined.  A function
 *    failure where rounding differences have occurred, for example,
 *    do not necessarily indicate a problem.
 *
 * 3. Restore your original vf.html by removing the line added, or
 *    uncommented, in step 1. (above).
 *
 *
 * vf_unit_test.js
 *
 * Copyright (c) Harris Hudson 2021
 *
 */

'use strict';

function run_cf_unit_tests() {

 //unit_tests - Array of Array [Custom Function id, Custom Function params (array), expected result]

 const unit_tests=
 [
 
  // Some Math Function Tests
  //-------------------------
  [1010,[-35],35],
  [1020,[1],0],
  [1030,[1],0],
  [1040,[0],0],
  [1050,[0],0],
  [1060,[0],0],
  [1070,[0,1],0],
  [1080,[0],0],
  [1090,[27],3],
  [1100,[3.141],4],
  [1110,[0],1],
  [1120,[0],1],
  [1130,[0],1],
  [1140,[3.141],3],
  [1150,[1],0],
  [1160,[2,3],8],
  [1180,[3.141],3],
  [1180,[3.88],4],
  [1190,[0],0],
  [1200,[16],4],
  [1210,[0],0],
  [1220,[0],0],
  [1230,[3.141],3],
  [1230,[3.88],3],

  // Some String Function Tests
  //---------------------------
  [1250,['hello'],5],
  [1252,['hello',1],'e'],
  [1254,['hello',1],101],
  [1256,['hello',' there'],'hello there'],
  [1258,['hello there','there'],'true'],
  [1258,['hello there','hello'],'false'],
  [1260,[101],'e'],
  [1262,['hello there goobs','goobs'],'true'],
  [1264,['hello there goobs','goobs','5'],12],
  [1266,['hello there goobs','goobs'],12],
  [1268,['hello there goobs','abc goobs'],1],
  [1268,['xyz','abc'],1],
  [1268,['abc','xyz'],-1],
  [1270,['hello there goobs','goobs'],'goobs'],
  [1270,['hello there goobs and goobs','goobs','g'],"goobs,goobs"],
  [1272,['hello there goobs and goobs','4'],"hello there goobs and goobshello there goobs and goobshello there goobs and goobshello there goobs and goobs"],
  [1278,['hello there goobs and goobs','5','6'],' '],
  [1278,['hello there goobs and goobs','5','10']," ther"],
  [1280,['hello there goobs and goobs','goobs','g','gonk'],''],
  [1280,['hello there goobs and goobs','goobs','g','1'],'hello there '],
  [1282,['hello there goobs and goobs','hello'],'true'],
  [1284,['hello there goobs and goobs','4','9'],'o there g'],
  [1286,['hello there goobs and goobs','4','9'],'o the'],
  [1288,['Hello There Goobs and Goobs'],"hello there goobs and goobs"],
  [1290,['Hello There Goobs and Goobs'],"HELLO THERE GOOBS AND GOOBS"],
  [1292,['Hello There Goobs and Goobs'],"hello there goobs and goobs"],
  [1294,['Hello There Goobs and Goobs'],"HELLO THERE GOOBS AND GOOBS"],

  // Some Stats Function unit tests
  //-------------------------------
  [1300,['1,2,3,4,5',','],5],
  [1310,['1,2,3,4,5',','],1],
  [1320,['1,2,3,4,5',','],4],
  [1330,['1,2,3,4,5',','],2],
  [1340,['1,2,3,4,5',','],15],
  [1350,['1,2,3,4,5',','],3],
  [1360,['1,2,3,4,5',','],'1,2,3,4,5'],
  [1370,['1,2,3,4,5',','],2],
  [1380,['1,1,1',','],0],
  [1390,['1,2,3,4,5',','],1.2],

  // Some Misc Function unit tests
  //------------------------------
  [1400,['gold','There is gold in that hill up there',1],'true'],
  [1400,['gold hill','There is gold in that hill up there',1],'true'],
  [1400,['nuggets gold','There is gold in that hill up there',1],'false'],
  [1410,['hills','There is gold in that hill up there','true',1],'true'],
  [1410,['gold hills','There is gold in that hill up there','true',1],'true'],
  [1410,['nuggets hills','There is gold in that hill up there','true',1],'false'],
  [1410,['nuggets','There is gold in that hill up there','true',1],'false'],
  [1410,['hill','There is gold in those hills up there','false',1],'false'],
  [1410,['hill','There is gold in that hill up there','false',1],'true'],
  [1420,['p=x&q=y'],"p%3Dx%26q%3Dy"],
  [1430,['POINT (135 -36)'],'true'],
  [1430,['POINT (ABC -XYZ)'],'false'],
  [1440,[135,-36],'POINT (135 -36)'],
  [1450,['145,-36,143,-20',2,','],'LINESTRING (145 -36, 143 -20)'],
  [1460,['"135,-23,140,-23,150,-44,135,-23"',2],'POLYGON ((135 -23, 140 -23, 150 -44, 135 -23))'],
  [1470,['POINT (135 -23)','POINT (136 -34)'],1223025.999],

  //Some Turf Function unit tests
  //-----------------------------
  [1700,['LINESTRING (-83 30, -84 36, -78 41)',200,'miles'],"POINT (-83.4608648621918 32.8678095806294)"],
  [1710,['POLYGON ((125 -15, 113 -22, 154 -27, 144 -15, 125 -15))'],3339946239196.927],
  [1720,['POLYGON ((125 -15, 113 -22, 154 -27, 144 -15, 125 -15))'],"POLYGON ((113 -27, 154 -27, 154 -15, 113 -15, 113 -27))"],
  [1730,["POINT (-75.343 39.984)","POINT (-75.534 39.123)"],-170.2330491349224],
  [1740,['MULTIPOINT (-97.522259 35.4691,-97.502754 35.463455,-97.508269 35.463245)'],"POINT (-97.5125065 35.4661725)"],
  [1750,["POLYGON ((-81 41, -88 36, -84 31, -80 33, -77 39, -81 41))"],"POINT (-82.3109243697479 36.134453781512605)"],
  [1760,["POLYGON ((-81 41, -88 36, -84 31, -80 33, -77 39, -81 41))"],"POINT (-82 36)"],
  [1770,["POINT (-75.343 39.984)",50,90,'miles'],"POINT (-74.39858826442095 39.98016766669771)"],
  [1780,["POINT (-75.343 39.984)","POINT (-75.534 39.123)",'miles'],60.35329997171415],
  [1790,['MULTIPOINT (-75.343 39.984,-75.833 39.284,-75.534 39.123)'],"POLYGON ((-75.833 39.123, -75.343 39.123, -75.343 39.984, -75.833 39.984, -75.833 39.123))"],
  [1800,["LINESTRING (115 -32, 131 -22, 143 -25, 150 -34)",'miles'],2738.9663893575207],
  [1810,["POINT (144.834823 -37.771257)","POINT (145.14244 -37.830937)"],"POINT (144.98856936202512 -37.801196981553204)"],
  //Point on Polygon - May or be this point. Omitting this test.
  //[1820,["POLYGON ((116 -36, 131 -32, 146 -43, 155 -25, 133 -9, 111 -22, 116 -36))"], "POINT (133 -26)"],
  [1824,["POINT (61 5)","POLYGON ((11 0, 22 4, 31 0, 31 11, 21 15, 11 11, 11 0))"],"GEOMETRYCOLLECTION (POINT (21 15), POINT (31 0))"],
  [1830,["POINT (0 0)","LINESTRING (1 1, -1 1)",'miles'],69.09341957563635],
  [1840,["POINT (-75.343 39.984)","POINT (-75.534 39.123)"],-170.29417535572546],
  [1850,["POINT (-75.343 39.984)",50,90,'miles'],"POINT (-74.3985529486182 39.984)"],
  [1860,["POINT (-75.343 39.984)","POINT (-75.534 39.123)",'miles'],60.35331130430885],
  [1870,["POINT (-122 48)","POINT (-77 39)",4],"LINESTRING (-122 48, -105.56299803455904 47.07036086861578, -90.32097165637266 43.929181562520576, -77 38.99999999999999)"],
  [1880,["LINESTRING (0 0, 0 2, 0 5, 0 8, 0 8, 0 10)"],"LINESTRING (0 0, 0 10)"],
  [1880,["MULTIPOINT (0 0, 0 0, 2 2)"],"MULTIPOINT (0 0, 2 2)"],
  [1890,["POINT (20.566406 43.421008)"],"POINT (43.421008 20.566406)"],
  [1900,["POLYGON ((121 -29, 138 -29, 138 -18, 121 -18, 121 -29))",'true'],"POLYGON ((121 -29, 121 -18, 138 -18, 138 -29, 121 -29))"],
  [1900,["POLYGON ((121 -29, 138 -29, 138 -18, 121 -18, 121 -29))"],"POLYGON ((121 -29, 138 -29, 138 -18, 121 -18, 121 -29))"],
  [1910,["POINT (70.46923055566859 58.11088890802906 1508)",3,2],"POINT (70.469 58.111)"],
  [1930,["POINT (-90.54863 14.616599)",500,'miles',4],"POLYGON ((-83.07270791565222 14.497609113923506, -83.54820094141374 17.276594277096766, -85.12097070254642 19.665526058373597, -87.58321764526781 21.28154563838579, -90.54863 21.85317815718951, -93.5140423547322 21.28154563838579, -95.97628929745359 19.665526058373597, -97.54905905858627 17.276594277096766, -98.02455208434779 14.497609113923506, -97.37552924279619 11.753080286862618, -95.72930532658297 9.44788759998446, -93.3382685922813 7.916401541532337, -90.54863 7.3800198428104835, -87.75899140771872 7.916401541532337, -85.36795467341705 9.447887599984464, -83.72173075720382 11.753080286862623, -83.07270791565222 14.497609113923506))"],
  [1940,["POINT (-75.343 39.984)",5,'kilometers',6],"POLYGON ((-75.343 40.02896601818623, -75.39383961781454 40.00647190570906, -75.3938061684197 39.961505898288976, -75.343 39.93903398181377, -75.2921938315803 39.961505898288976, -75.29216038218547 40.00647190570906, -75.343 40.02896601818623))"],
  [1950,['POINT (-63.601226 44.642643),POINT (-63.591442 44.651436),POINT (-63.580799 44.648749),POINT (-63.573589 44.641788),POINT (-63.587665 44.64533),POINT (-63.595218 44.64765)',',','"',1,'miles'], "POLYGON ((-63.591442 44.651436, -63.580799 44.648749, -63.573589 44.641788, -63.587665 44.64533, -63.601226 44.642643, -63.591442 44.651436))"],
  [1960,["GEOMETRYCOLLECTION (POINT (10.195312 43.755225), POINT (10.404052 43.8424511), POINT (10.579833 43.659924), POINT (10.360107 43.516688), POINT (10.14038 43.588348), POINT (10.195312 43.755225))"],"POLYGON ((10.360107 43.516688, 10.14038 43.588348, 10.195312 43.755225, 10.404052 43.8424511, 10.579833 43.659924, 10.360107 43.516688))"],
  [1970,["POLYGON ((128 -26, 141 -26, 141 -21, 128 -21, 128 -26))","POLYGON ((126 -28, 140 -28, 140 -20, 126 -20, 126 -28))"],"POLYGON ((140 -26, 141 -26, 141 -21, 140 -21, 140 -26))"],
  [1990,["POLYGON ((-122.801742 45.48565, -122.801742 45.60491, -122.584762 45.60491, -122.584762 45.48565, -122.801742 45.48565))","POLYGON ((-122.520217 45.535693, -122.64038 45.553967, -122.720031 45.526554, -122.669906 45.507309, -122.723464 45.446643, -122.532577 45.408574, -122.487258 45.477466, -122.520217 45.535693))"], "POLYGON ((-122.720031 45.526554, -122.669906 45.507309, -122.68902729894835 45.48565, -122.584762 45.48565, -122.584762 45.545508794628965, -122.64038 45.553967, -122.720031 45.526554))"],
  [2000,["LINESTRING (-83 30, -84 36, -78 41)",2,'miles'], "LINESTRING (-82.97144752916007 30.004758745139988, -83.96871903948426 35.98838780708505, -77.98146901966652 40.977762823599825)"],
  [2005,["POLYGON ((11 0, 22 4, 31 0, 31 11, 21 15, 11 11, 11 0))",2], "POLYGON ((15.125 1.5, 17.875 2.5, 20.5 3, 23 3, 25.375 2.5, 27.625 1.5, 29.3125 1.4375, 30.4375 2.3125, 31 4.125, 31 6.875, 30.375 9.1875, 29.125 11.0625, 27.25 12.5, 24.75 13.5, 22.25 14, 19.75 14, 17.25 13.5, 14.75 12.5, 12.875 11.0625, 11.625 9.1875, 11 6.875, 11 4.125, 11.6875 2.3125, 13.0625 1.4375, 15.125 1.5))"],
  [2010,["POLYGON ((-70.603637 -33.399918, -70.614624 -33.395332, -70.639343 -33.392466, -70.659942 -33.394759, -70.683975 -33.404504, -70.697021 -33.419406, -70.701141 -33.434306, -70.700454 -33.446339, -70.694274 -33.458369, -70.682601 -33.465816, -70.668869 -33.472117, -70.646209 -33.473835, -70.624923 -33.472117, -70.609817 -33.468107, -70.595397 -33.458369, -70.587158 -33.442901, -70.587158 -33.426283, -70.590591 -33.414248, -70.594711 -33.406224, -70.603637 -33.399918))",0.01,'false'], "POLYGON ((-70.603637 -33.399918, -70.683975 -33.404504, -70.701141 -33.434306, -70.694274 -33.458369, -70.668869 -33.472117, -70.609817 -33.468107, -70.587158 -33.442901, -70.603637 -33.399918))"],
  [2020,["POLYGON ((11 0, 22 4, 31 0, 31 11, 21 15, 11 11, 11 0))"],"GEOMETRYCOLLECTION (POLYGON ((11 11, 11 0, 22 4, 11 11)), POLYGON ((22 4, 31 0, 31 11, 22 4)), POLYGON ((31 11, 21 15, 11 11, 31 11)), POLYGON ((11 11, 22 4, 31 11, 11 11)))"],
  [2030,["POLYGON ((0 29, 3.5 29, 2.5 32, 0 29))",10,'POINT (0 25)'],"POLYGON ((0.7795822621476418 28.93923101204884, 4.215029062075928 28.39787231953407, 3.8371754734060914 31.512519272167843, 0.7795822621476418 28.93923101204884))"],
  [2040,["POLYGON ((0 29, 3.5 29, 2.5 32, 0 29))",100,35],"POLYGON ((0.591903257444983 29.73668011441568, 4.091903257444983 29.73668011441568, 3.1107279117935605 32.73668011441568, 0.591903257444983 29.73668011441568))"],
  [2050,["POLYGON ((0 29, 3.5 29, 2.5 32, 0 29))",3],"POLYGON ((-3.943186502488288 27.000000000000014, 6.457389876866159 27.000000000000007, 3.5342414612586026 36.00000000000001, -3.943186502488288 27.000000000000014))"],
  [2060,['"POLYGON ((-82.574787 35.594087, -82.574787 35.615581, -82.545261 35.615581, -82.545261 35.594087, -82.574787 35.594087))","POLYGON ((-82.560024 35.585153, -82.560024 35.602602, -82.52964 35.602602, -82.52964 35.585153, -82.560024 35.585153))"'],"POLYGON ((-82.574787 35.594087, -82.560024 35.594087, -82.560024 35.585153, -82.52964 35.585153, -82.52964 35.602602, -82.545261 35.602602, -82.545261 35.615581, -82.574787 35.615581, -82.574787 35.594087))"],
  [2080,['"POINT (19.026432 47.49134)","POINT (19.074497 47.509548)"'],"MULTIPOINT (19.026432 47.49134, 19.074497 47.509548)"],
  [2090,["POLYGON ((-81 41, -88 36, -84 31, -80 33, -77 39, -81 41))"],"GEOMETRYCOLLECTION (POINT (-81 41), POINT (-88 36), POINT (-84 31), POINT (-80 33), POINT (-77 39), POINT (-81 41))"],
  [2100,["MULTIPOLYGON (((102 2, 103 2, 103 3, 102 3, 102 2)), ((100 0, 101 0, 101 1, 100 1, 100 0), (100.2 0.2, 100.8 0.2, 100.8 0.8, 100.2 0.8, 100.2 0.2)))"], "GEOMETRYCOLLECTION (POLYGON ((102 2, 103 2, 103 3, 102 3, 102 2)), POLYGON ((100 0, 101 0, 101 1, 100 1, 100 0), (100.2 0.2, 100.8 0.2, 100.8 0.8, 100.2 0.8, 100.2 0.2)))"],
  [2110,["LINESTRING (125 -30, 145 -30, 145 -20, 125 -20, 125 -30)"], "POLYGON ((125 -30, 145 -30, 145 -20, 125 -20, 125 -30))"],
  [2130,["POLYGON ((125 -30, 145 -30, 145 -20, 125 -20, 125 -30))"], "LINESTRING (125 -30, 145 -30, 145 -20, 125 -20, 125 -30)"],
  [2140,["POLYGON ((-12.034835 8.901183, -12.060413 8.899826, -12.03638 8.873199, -12.059383 8.871418, -12.034835 8.901183))"], "POINT (-12.047632373646445 8.885665897727455)"],
  [2150,["POINT (-75 40)", 5, 25, 47], "LINESTRING (-74.97517792609881 40.04075040571227, -74.97008079359495 40.038690305118934, -74.96527228827969 40.03625742190849, -74.96079876149496 40.03347522459089, -74.95705100267124 40.03065882615696)"],
  [2160,["LINESTRING (-95 40, -93 45, -85 50)",200,'miles'], "GEOMETRYCOLLECTION (LINESTRING (-95 40, -93.9290959733529 42.78097966229309), LINESTRING (-93.9290959733529 42.78097966229309, -93 45, -92.42581925970666 45.41120514278656), LINESTRING (-92.42581925970666 45.41120514278656, -89.4140948498212 47.42882827023753), LINESTRING (-89.4140948498212 47.42882827023753, -86.16754803986497 49.3613836187543), LINESTRING (-86.16754803986497 49.3613836187543, -85 50))"],
  [2170,["LINESTRING (126 -11, 129 -21)","LINESTRING (123 -18, 131 -14)"], "POINT (127.43478260869566 -15.782608695652174)"],
  [2180,["LINESTRING (115 -35, 125 -30, 135 -30, 145 -35)","LINESTRING (115 -25, 125 -30, 135 -30, 145 -25)"], "LINESTRING (125 -30, 135 -30)"],
  [2190,["POLYGON ((-50 5, -40 -10, -50 -10, -40 5, -50 5))"], "GEOMETRYCOLLECTION (LINESTRING (-50 5, -40 -10), LINESTRING (-40 -10, -50 -10), LINESTRING (-50 -10, -40 5), LINESTRING (-40 5, -50 5))"],
  [2200,["POINT (-77.029609 38.881946)","POINT (-77.021884 38.889563)","LINESTRING (-77.031669 38.878605, -77.029609 38.881946, -77.020339 38.884084, -77.025661 38.885821, -77.021884 38.889563, -77.019824 38.892368)"], "LINESTRING (-77.029609 38.881946, -77.020339 38.884084, -77.025661 38.885821, -77.021884 38.889563, -77.021884 38.889563)"],
  [2210,["LINESTRING (7 45, 9 45, 14 40, 14 41)",12.5,25,'miles'], "LINESTRING (7.25584134370955 45.00194719009643, 7.511697527558178 45.003323144337116)"],
  [2220,["LINESTRING (120 -25, 145 -25)","LINESTRING (130 -15, 130 -35)"], "GEOMETRYCOLLECTION (LINESTRING (120 -25, 130 -25), LINESTRING (130 -25, 145 -25))"],
  [2230,["POLYGON ((112 -21, 116 -36, 146 -39, 153 -24, 133 -10, 112 -21))","POLYGON ((90 -55, 170 -55, 170 10, 90 10, 90 -55))"], "POLYGON ((90 -55, 170 -55, 170 10, 90 10, 90 -55), (112 -21, 116 -36, 146 -39, 153 -24, 133 -10, 112 -21))"],
  [2240,["LINESTRING (-77.031669 38.878605, -77.029609 38.881946, -77.020339 38.884084, -77.025661 38.885821, -77.021884 38.889563, -77.019824 38.892368)","POINT (-77.037076 38.884017)",'miles'], "POINT (-77.02996941477018 38.881361463229524)"],
  [2250,['POINT (-75 40)',5,25,45,20,'miles'], "POLYGON ((-75 40, -74.9600381934288 40.065578821761065, -74.9355237937214 40.05290713328423, -74.93315176183515 40.05115114742902, -75 40))"],
  [2260,['POINT (-5 -6)','POINT (9 -6)',"POLYGON ((0 -7, 5 -7, 5 -3, 0 -3, 0 -7))"], "LINESTRING (-5 -6, -4.763998063014412 -5.958401815691071, -3.958760198369838 -5.958401815691071, -3.636665052512009 -6.277869087588095, -3.3145699066541803 -6.277869087588095, -2.6703796149385224 -6.916803631382142, -0.09361844807588832 -6.916803631382142, 0.06742912485302632 -7.076537267330654, 4.898856312720465 -7.076537267330654, 6.026189323222869 -5.958401815691071, 8.925045635943338 -5.958401815691071, 9 -6)"],
  [2270,["POLYGON ((0 0, 2 0, 0 2, 2 2, 0 0))"], "GEOMETRYCOLLECTION (POLYGON ((0 0, 2 0, 1 1, 0 0)), POLYGON ((1 1, 0 2, 2 2, 1 1)))"],
  [2280,['"LINESTRING (-76 18, -76 18.7, -76.5 19.4, -74.6 19.1)","POINT (-76 22)"'], "GEOMETRYCOLLECTION (LINESTRING (-76 18, -76 18.7, -76.5 19.4, -74.6 19.1), POINT (-76 22))"],
  [2290,['"LINESTRING (-76 18, -76 18.7, -76.5 19.4, -74.6 19.1)","LINESTRING (-75 33, -74 23)"'], "MULTILINESTRING ((-76 18, -76 18.7, -76.5 19.4, -74.6 19.1), (-75 33, -74 23))"],
  [2300,['"POLYGON ((-81 41, -81 47, -72 47, -72 41, -81 41))","POLYGON ((-81 35, -81 41, -72 41, -72 35, -81 35))"'], "MULTIPOLYGON (((-81 41, -81 47, -72 47, -72 41, -81 41)), ((-81 35, -81 41, -72 41, -72 35, -81 35)))"],
  [2310,["LINESTRING (0 0, 1 1, 1 0, 0 0)"], "true"],
  [2310,["LINESTRING (0 0, 1 0, 1 1, 0 0)"], "false"],
  [2320,["LINESTRING (1 1, 1 2, 1 3, 1 4)",'POINT (1 2)'], "true"],
  [2340,["LINESTRING (-2 2, 4 2)","LINESTRING (1 1, 1 2, 1 3, 1 4)"], "true"],
  [2350,["POINT (2 2)","LINESTRING (1 1, 1 2, 1 3, 1 4)"], "true"],
  [2360,["POINT (0 0)","POINT (0 0)"], "true"],
  [2360,["POINT (0 0)","POINT (1 1)"], "false"],
  [2364,["LINESTRING (1 1, 1 2, 1 3, 1 4)", "POINT (1 2)"], "true"],
  [2364,["LINESTRING (1 1, 1 2, 1 3, 1 4)", "POINT (2 2)"], "false"],
  [2370,["POLYGON ((0 0, 0 5, 5 5, 5 0, 0 0))","POLYGON ((1 1, 1 6, 6 6, 6 1, 1 1))"], "true"],
  [2370,["POLYGON ((1 1, 1 6, 6 6, 6 1, 1 1))","POLYGON ((10 10, 10 15, 15 15, 15 10, 10 10))"], "false"],
  [2380,["LINESTRING (0 0, 0 1)","LINESTRING (1 0, 1 1)"], "true"],
  [2390,["POINT (-77 44)","POLYGON ((-81 41, -81 47, -72 47, -72 41, -81 41))"], "true"],
  [2400,["POINT (0 0)","LINESTRING (-1 -1, 1 1, 1.5 2.2)"], "true"],
  [2410,["POINT (1 2)","LINESTRING (1 1, 1 2, 1 3, 1 4)"], "true"],
  [2420,[-172], 188],
  [2430,[1000,'acres','hectares'], 404.6862669715303],
  [2440,[1000,'miles','kilometers'], 1609.344],
  [2450,[180], 3.141592653589793],
  [2460,[1000], 0.15696101377226163],
  [2470,[1000], 8.99320363724538],
  [2480,[0], 0],
  [2490,[3.141592653589793], 180],
  [2500,["POINT (-71 41)"], "POINT (-7903683.846322424 5012341.663847514)"],
  [2510,["POINT (-7903683.846322424 5012341.663847514)"], "POINT (-71 40.99999999999998)"],
  [2520,["POINT (0 0)"], "Point"]

 ];

 var success_count=0;

 var this_cf_idx={};
 for (var i=0;i<VF_CUSTOM_FUNCTIONS.length;i++)
  this_cf_idx[VF_CUSTOM_FUNCTIONS[i].id]=i;

 function assert(i) {
  let cf_id= unit_tests[i][0];
  let cf_params= unit_tests[i][1];
  let this_cf=VF_CUSTOM_FUNCTIONS[this_cf_idx[cf_id]];
  if (!this_cf) {
   console.log('Assert: Unknown Custom Function (id='+cf_id.toString()+'), (Test Index='+i.toString()+')');
   return;
  }
  let expected_result= unit_tests[i][2];
  var actual_result;
  try {
   actual_result=this_cf.func(cf_params);
   if (actual_result!==expected_result) {
    console.log('Custom Function Assertion Failure: Test Index='+i.toString()+', Func id='+cf_id.toString());
    console.log('Function Being Tested:"'+this_cf.name+'", Got:'+actual_result.toString()+
                ', Expected:'+expected_result.toString());
    return;
   }
  } catch(e) {
   console.log('Custom Function Invocation Failure; Test Index='+i.toString()); 
   console.log('Custom Function Invocation Error: '+e.toString());
   return;
  }
  success_count++;
 }

 console.log('Begin Running Visual Field Custom Function Unit Tests.');

 for (let i=0; i<unit_tests.length; i++)
  assert(i);

 console.log('End Running Visual Field Custom Function Unit Tests.');
 console.log('Tests Passed '+success_count.toString()+'/'+unit_tests.length.toString()+' total tests.');
}

window.addEventListener('load', run_cf_unit_tests);
