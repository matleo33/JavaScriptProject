/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function afficherMaps() {
    //AFFICHER LA MAP
    document.getElementById(widgetMaps);
    
    
    initMap();
}

function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 44.78899699999999, lng: -0.6124220000000378}
    });
    directionsDisplay.setMap(map);

    document.getElementById('buttonTrajet').addEventListener('click',function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
    document.getElementById('mode').addEventListener('change', function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    directionsService.route({
        origin: document.getElementById('depart').value,  // Haight.
        destination: {lat: 44.78899699999999, lng: -0.6124220000000378},  // Ocean Beach.
        travelMode: google.maps.TravelMode[selectedMode]
    }, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Problème d\'insertion');
        }
    });
}

var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCc3aOD6v9VdblfpjonQyYzXV1C0Hk3rMs&signed_in=true&callback=initMap";
script.defer = true;
script.async =true;
document.getElementsByTagName('head')[0].appendChild(script);