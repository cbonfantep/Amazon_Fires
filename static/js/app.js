
var year_2014 = L.layerGroup();


var url = "/amazon_fire_data/2014";
// var year = d3.select();
// var queryUrl = url + "/" + year;

d3.json(url, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      heatArray.push([location.latitude, location.longitude]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 20
  }).addTo(year_2014);

});



var year_2015 = L.layerGroup();

// L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(year_2015),
// L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(year_2015),
// L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(year_2015),
// L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(year_2015);

var url_15 = "/amazon_fire_data/2015";
// var year = d3.select();
// var queryUrl = url + "/" + year;

d3.json(url_15, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      heatArray.push([location.latitude, location.longitude]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 20
  }).addTo(year_2015);

});


var year_2016 = L.layerGroup();

var url_16 = "/amazon_fire_data/2016";
// var year = d3.select();
// var queryUrl = url + "/" + year;

d3.json(url_16, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      heatArray.push([location.latitude, location.longitude]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 20
  }).addTo(year_2016);

});


var year_2017 = L.layerGroup();

var url_17 = "/amazon_fire_data/2017";
// var year = d3.select();
// var queryUrl = url + "/" + year;

d3.json(url_17, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      heatArray.push([location.latitude, location.longitude]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 20
  }).addTo(year_2017);

});


var year_2018 = L.layerGroup();

var url_18 = "/amazon_fire_data/2018";
// var year = d3.select();
// var queryUrl = url + "/" + year;

d3.json(url_18, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      heatArray.push([location.latitude, location.longitude]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 20
  }).addTo(year_2018);

});


var year_2019 = L.layerGroup();

var url_19 = "/amazon_fire_data/2019";
// var year = d3.select();
// var queryUrl = url + "/" + year;

d3.json(url_19, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      heatArray.push([location.latitude, location.longitude]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 20
  }).addTo(year_2019);

});


var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"

var grayscale   = L.tileLayer(mbUrl, {
  id: 'mapbox.light',
   attribution: mbAttr,
   accessToken: API_KEY
}),
    streets  = L.tileLayer(mbUrl, {
      attribution: mbAttr,
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: API_KEY
    });

    var map = L.map('map', {
        center: [-3.10719, -60.0261],
        zoom: 4,
        layers: [streets, year_2019]
    });

var baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets
};

var overlays = {
    "2014": year_2014,
    "2015": year_2015,
    "2016": year_2016,
    "2017": year_2017,
    "2018": year_2018,
    "2019": year_2019
};

L.control.layers(baseLayers, overlays).addTo(map);
