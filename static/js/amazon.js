var myMap = L.map("map", {
  center: [-3.10719, -60.0261],
  zoom: 5
});

// Adding tile layer

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);


d3.json("static/js/new_test.json", function(response) {

var heatArray = [];


for (var i = 0; i < 10000; i++) {
  var location = response[i % response.length];

console.log(response);

  if (location) {
    heatArray.push([location.latitude, location.longitude]);
  }
}

var heat = L.heatLayer(heatArray, {
  radius: 100,
  blur: 35
}).addTo(myMap);

});
