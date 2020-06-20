// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


async function getUrlData() {
    const response = await fetch('/data');
    const urlData = await response.json();
  //   const urlData = await response.text();
    console.log(urlData);
    document.getElementById('data-container').innerText = urlData;
  }
  
  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: 30, lng: 0}, 
        zoom: 1, 
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#06aae9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    });
    var newyorkcity = {lat: 40.7128, lng: -74.0060};
    var orlando = {lat: 28.5383, lng: -81.3792};
    var mumbai = {lat: 19.0760, lng: 72.8777};
    var dc = {lat: 38.9072, lng: -77.0369};

    var banff = {lat: 51.4968, lng:-115.9281};
    var losangeles = {lat: 34.0522, lng:-118.2437};
    var paris = {lat: 48.8566, lng: 2.3522};
    var morocco = {lat: 31.7917, lng: -7.0926};
    var switzerland = {lat: 46.8182, lng:8.2275};
    var australia = {lat: -25.2744, lng:133.7751};
    var egypt = {lat: 26.8206, lng:30.8025};

    var contentString = '<p><b>My favourite city!</b>';
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });

    //Places I have visited
    var nyc = new google.maps.Marker({position: newyorkcity, icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}, map: map, title: 'New York City - my favourite city'});
    var marker = new google.maps.Marker({position: orlando, icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}, map: map, title: 'Orlando, FL, USA'});
    var marker = new google.maps.Marker({position: mumbai, icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}, map: map, title: 'Mumbai, India'});
    var marker = new google.maps.Marker({position: dc, icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}, map: map, title: 'Washington, DC, USA'});

    //Places I want to visit
    var marker = new google.maps.Marker({position: banff, icon: {url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}, map: map, title: 'Banff National Park, Alberta, Canada'});
    var marker = new google.maps.Marker({position: losangeles, icon: {url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}, map: map, title: 'Los Angeles, CA, USA'});
    var marker = new google.maps.Marker({position: paris, icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}, map: map, title: 'Paris, France'});
    var marker = new google.maps.Marker({position: morocco, icon: {url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}, map: map, title: 'Morocco'});
    var marker = new google.maps.Marker({position: switzerland, icon: {url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}, map: map, title: 'Switzerland'});
    var marker = new google.maps.Marker({position: australia, icon: {url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}, map: map, title: 'Australia'});
    var marker = new google.maps.Marker({position: egypt, icon: {url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}, map: map, title: 'Egypt'});

    nyc.addListener('click', function() {
        infowindow.open(map, nyc);
    });
}