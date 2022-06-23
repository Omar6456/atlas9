
function show() {
    document.getElementById("list").classList.toggle("show");
    document.getElementById("list2").classList.toggle("show2");
}

function openWep() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("list").style.display = "none";
}
function closeWep() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("list").style.display = "";
}

function openWep2() {
  document.getElementById("mySidenav2").style.display = "block";
  document.getElementById("list").style.display = "none";
}
function closeWep2() {
  document.getElementById("mySidenav2").style.display = "none";
  document.getElementById("list").style.display = "";
}



// +++++++++++++++++++++++++++++++++++++++++++++++++
function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("hiden");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
 

  $(document).ready(function() {
    $('.gallery_pics').click(function(e) {
      $(this).toggleClass('fullscreen');
    });
  });







  
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend"

], function(esriConfig,Map, MapView, FeatureLayer,ScaleBar, Legend) {

esriConfig.apiKey = "AAPK02ae9b68d4e34bfaa197ea82ed78c084VDVSJJOpfv7g6f07_OqhssLfBkPGJxAogSqk1cZqh-8aYjcu-LNLRsIKoV0nsYDd";

const map = new Map({
  basemap: "arcgis-topographic"
});

const view = new MapView({
  container: "viewDiv",
  map: map,
  center: [31.700001, 26.549999],
  zoom: 9.7
});

  const trailsLayer2 = new FeatureLayer({
    url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/geol/FeatureServer/1"
  });
  map.add(trailsLayer2, 0);

const scalebar = new ScaleBar({
      view: view,
      container: ScaleBarDiv
    });
    view.ui.add(scalebar, "top-right");
    const legend = new Legend ({
      view: view,
      container: basemapGalleryDiv
    });
    view.ui.add(legend, "bottom-left");

});
// 

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend"

], function(esriConfig,Map, MapView, FeatureLayer,ScaleBar, Legend) {

esriConfig.apiKey = "AAPK02ae9b68d4e34bfaa197ea82ed78c084VDVSJJOpfv7g6f07_OqhssLfBkPGJxAogSqk1cZqh-8aYjcu-LNLRsIKoV0nsYDd";

const map = new Map({
  basemap: "hybrid"
});

const view = new MapView({
  container: "viewDiv2",
  map: map,
  center: [31.85, 26.4],
  zoom: 10
});


    const trailsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/المسار/FeatureServer/5"
    });
    map.add(trailsLayer, 0);


    const trailheadsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/فنادق/FeatureServer/1"
    });
    map.add(trailheadsLayer); 
    // 1pharo
    const trailheadsLayer2 = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/المسار3/FeatureServer/4"
    });
    map.add(trailheadsLayer2);
    // ? 2chr
    const trailheadsLayer3 = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/المسار3/FeatureServer/3"
    });
    map.add(trailheadsLayer3);
    //  3fg
    const trailheadsLayer4 = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/المسار3/FeatureServer/2"
    });
    map.add(trailheadsLayer4);
    // ops
    const trailheadsLayer5 = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/المسار3/FeatureServer/1"
    });
    map.add(trailheadsLayer5);
    // ksd
    const trailheadsLayer6 = new FeatureLayer({
      url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/المسار3/FeatureServer/0"
    });
    map.add(trailheadsLayer6);

    const scalebar = new ScaleBar({
      view: view,
      container: ScaleBarDiv2
    });
    view.ui.add(scalebar, "top-right");
    const legend = new Legend ({
      view: view,
      container: basemapGalleryDiv3
    });
    view.ui.add(legend, "bottom-left");



});
// ====================================================


function openWep3() {
  document.getElementById("mySidenav3").style.display = "block";
  document.getElementById("list").style.display = "none";
}
function closeWep3() {
  document.getElementById("mySidenav3").style.display = "none";
  document.getElementById("list").style.display = "";
}

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend",

], function(esriConfig,Map, MapView, FeatureLayer,ScaleBar, Legend) {

esriConfig.apiKey = "AAPK02ae9b68d4e34bfaa197ea82ed78c084VDVSJJOpfv7g6f07_OqhssLfBkPGJxAogSqk1cZqh-8aYjcu-LNLRsIKoV0nsYDd";
// arcgis-imagery
const map = new Map({
  basemap: "streets-vector"
});

const view = new MapView({
  container: "viewDiv3",
  map: map,
  center: [31.700001, 26.549999],
  zoom: 9.7
});
const trailheadsLayer = new FeatureLayer({
  url: "https://services7.arcgis.com/ydgkIh1tsn77SGGY/arcgis/rest/services/الخدمات_الصحية/FeatureServer/0"
});
map.add(trailheadsLayer);

const legend = new Legend ({
  view: view,
  container: basemapGalleryDiv2
});
view.ui.add(legend, "bottom-left");

});

// ====================================================


function openWep4() {
  document.getElementById("mySidenav4").style.display = "block";
  document.getElementById("list").style.display = "none";
}
function closeWep4() {
  document.getElementById("mySidenav4").style.display = "none";
  document.getElementById("list").style.display = "";
}

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend",

], function(esriConfig,Map, MapView, FeatureLayer,ScaleBar, Legend) {

esriConfig.apiKey = "AAPK02ae9b68d4e34bfaa197ea82ed78c084VDVSJJOpfv7g6f07_OqhssLfBkPGJxAogSqk1cZqh-8aYjcu-LNLRsIKoV0nsYDd";
// arcgis-imagery
const map = new Map({
  basemap: "streets-vector"
});

const view = new MapView({
  container: "viewDiv4",
  map: map,
  center: [31.700001, 26.549999],
  zoom: 9.7
});
const trailsLayer = new FeatureLayer({
  url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/Hydrology/FeatureServer/0"
});
map.add(trailsLayer, 0);

const trailsLayer7 = new FeatureLayer({
  url: "https://services3.arcgis.com/dnBdTND9r7WDLMek/arcgis/rest/services/Hydrology/FeatureServer/1"
});
map.add(trailsLayer7, 0);
const legend = new Legend ({
  view: view,
  container: basemapGalleryDiv4
});
view.ui.add(legend, "bottom-left");

});

function openWep5() {
  document.getElementById("mySidenav5").style.display = "block";
  document.getElementById("list").style.display = "none";
}
function closeWep5() {
  document.getElementById("mySidenav5").style.display = "none";
  document.getElementById("list").style.display = "";
}
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend",

], function(esriConfig,Map, MapView, FeatureLayer,ScaleBar, Legend) {

esriConfig.apiKey = "AAPK02ae9b68d4e34bfaa197ea82ed78c084VDVSJJOpfv7g6f07_OqhssLfBkPGJxAogSqk1cZqh-8aYjcu-LNLRsIKoV0nsYDd";
// arcgis-imagery
const map = new Map({
  basemap: "streets-vector"
});

const view = new MapView({
  container: "viewDiv5",
  map: map,
  center: [31.700001, 26.549999],
  zoom: 9.7
});


const trailheadsLayer = new FeatureLayer({
  url: "https://services7.arcgis.com/ydgkIh1tsn77SGGY/arcgis/rest/services/الخدمات_المصرفية/FeatureServer/0"
});
map.add(trailheadsLayer); 

const legend = new Legend ({
  view: view,
  container: basemapGalleryDiv5
});
view.ui.add(legend, "bottom-left");

});

function openWep6() {
  document.getElementById("mySidenav6").style.display = "block";
  document.getElementById("list").style.display = "none";
}
function closeWep6() {
  document.getElementById("mySidenav6").style.display = "none";
  document.getElementById("list").style.display = "";
}
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/ScaleBar",
  "esri/widgets/Legend",

], function(esriConfig,Map, MapView, FeatureLayer,ScaleBar, Legend) {

esriConfig.apiKey = "AAPK02ae9b68d4e34bfaa197ea82ed78c084VDVSJJOpfv7g6f07_OqhssLfBkPGJxAogSqk1cZqh-8aYjcu-LNLRsIKoV0nsYDd";
// arcgis-imagery
const map = new Map({
  basemap: "streets-vector"
});

const view = new MapView({
  container: "viewDiv6",
  map: map,
  center: [31.700001, 26.549999],
  zoom: 9.7
});


const trailsLayer = new FeatureLayer({
  url: "https://services7.arcgis.com/ydgkIh1tsn77SGGY/arcgis/rest/services/شبكة_الكهرباء/FeatureServer/1"
});
map.add(trailsLayer, 0);
const trailsLayer2 = new FeatureLayer({
  url: "https://services7.arcgis.com/ydgkIh1tsn77SGGY/arcgis/rest/services/شبكة_الكهرباء/FeatureServer/2"
});
map.add(trailsLayer2, 0);

const trailheadsLayer = new FeatureLayer({
  url: "https://services7.arcgis.com/ydgkIh1tsn77SGGY/arcgis/rest/services/شبكة_الكهرباء/FeatureServer/0"
});
map.add(trailheadsLayer); 

const legend = new Legend ({
  view: view,
  container: basemapGalleryDiv6
});
view.ui.add(legend, "bottom-left");

});

// ----------------------------------


