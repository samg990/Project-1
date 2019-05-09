function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 34.0522, lng: -118.2437 },
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById("submitDrop").addEventListener("click", function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = $("#loc-dropdown option:selected").val();
  geocoder.geocode({ address: address }, function(results, status) {
    if (status === "OK") {
      resultsMap.panTo(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      });

      resultsMap.setZoom(15);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
