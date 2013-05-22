//
//
//
"use strict";

var pg = {
	init: function() {
		$("#getMyPosition").on("click", function() {
			$(this).find("div").html(pg.getMyPosition());
			return false;
		});
	},

	getMyPosition: function() {
		console.log("getMyPosition");
		console.log(navigator.geolocation.getCurrentPosition);
		navigator.geolocation.getCurrentPosition(function(position) {
			var s = "Latitude: "          + position.coords.latitude + '<br />' +
					"Longitude: "         + position.coords.longitude + '<br />' +
					"Altitude: "          + position.coords.altitude + '<br />' +
					"Accuracy: "          + position.coords.accuracy  + '<br />' +
					"Altitude Accuracy: " + position.coords.altitudeAccuracy + '<br />' +
					"Heading: "           + position.coords.heading + '<br />' +
					"Speed: "             + position.coords.speed + '<br />' +
					"Timestamp: "         + position.timestamp;
			console.log(s);
			return s;
		}, function(error) {
			console.log(error);
			return error;
		}, {
			enableHighAccuracy: true;
		});
	}
}

$(document).ready(function() {
	pg.init();
});
