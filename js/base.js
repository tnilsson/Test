//
//
//
"use strict";

var pg = {
	init: function() {
		$("#getMyPosition").on("click", function() {
			$("#getMyPosition div").text(pg.getMyPosition());
			return false;
		});
		
		$("#getPicture").on("click", function() {
			$("#getPicture div").text(pg.getPicture());
			return false;
		});
	},

	getPicture: function() {
		navigator.camera.getPicture(function(imageData) {
			// success
			//$(this).find("div").append("img").attr("src", "data:image/jpeg;base64," + imageData);
			alert(imageData);
			return "data:image/jpeg;base64," + imageData;
		}, function(error) {
			// error
			alert(error);
		}, {
			// options
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL
		});
	},

	getMyPosition: function() {
		navigator.geolocation.getCurrentPosition(function(position) {
			var s = "Latitude: "          + position.coords.latitude + ', ' +
					"Longitude: "         + position.coords.longitude + ', ' +
					"Altitude: "          + position.coords.altitude + ', ' +
					"Accuracy: "          + position.coords.accuracy  + ', ' +
					"Altitude Accuracy: " + position.coords.altitudeAccuracy + ', ' +
					"Heading: "           + position.coords.heading + ', ' +
					"Speed: "             + position.coords.speed + ', ' +
					"Timestamp: "         + position.timestamp;
			return s;
		}, function(error) {
			alert(error);
			return error;
		}, {
			enableHighAccuracy: true
		});
	}
}

$(document).ready(function() {
	pg.init();
});
