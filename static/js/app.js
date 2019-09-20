// var myMap = L.map("map", {
//   center: [3.10719, -60.0261],
//   zoom: 5
// });
//
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);

// var url = "/amazon_fire_data";
// var year = d3.select();
// var queryUrl = url + "/" + year;
//
// d3.json(url, function(response) {
//
//   console.log(response);
//
//   var heatArray = [];
//
//   for (var i = 0; i < response.length; i++) {
//     var location = response[i];
//
//     if (location) {
//       heatArray.push([location.latitude, location.longitude]);
//     }
//   }
//
//   var heat = L.heatLayer(heatArray, {
//     radius: 20,
//     blur: 35
//   }).addTo(myMap);
//
// });
//




var year_2014 = L.layerGroup();

L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(year_2014),
L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(year_2014),
L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(year_2014),
L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(year_2014);



var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2JvbmZhbnRlIiwiYSI6ImNrMDdnYXdhYjAyeHkzYnF6aTZwbnQ4eW0ifQ.b-Ccw3li5aClOfHRniN9DA';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
    streets  = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: mbAttr,
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: API_KEY
    });

    var map = L.map('map', {
        center: [3.10719, -60.0261],
        zoom: 5,
        layers: [streets, year_2014]
    });

var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlays = {
    "2014": year_2014
};

L.control.layers(baseLayers, overlays).addTo(map);
