//
//
//
"use strict";

var pg = {
	init: function() {
		alert("init");
		$("#getMyPosition").on("click", function() {
			$(this).find("div").html(pg.getMyPosition());
			return false;
		});
		
		$("#getPicture").on("click", function() {
			$(this).find("div").html(pg.getPicture());
			return false;
		});
	},

	getPicture: function() {
		navigator.camera.getPicture(function(imageData) {
			// success
			//$(this).find("div").append("img").attr("src", "data:image/jpeg;base64," + imageData);
			alert(imageData);
			$("#picture").attr("src", "data:image/jpeg;base64," + imageData);
		}, function(error) {
			alert(error);
			// error
		}, {
			// options
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL
		});
	},

	getMyPosition: function() {
		navigator.geolocation.getCurrentPosition(function(position) {
			alert(s);
			var s = "Latitude: "          + position.coords.latitude + '<br />' +
					"Longitude: "         + position.coords.longitude + '<br />' +
					"Altitude: "          + position.coords.altitude + '<br />' +
					"Accuracy: "          + position.coords.accuracy  + '<br />' +
					"Altitude Accuracy: " + position.coords.altitudeAccuracy + '<br />' +
					"Heading: "           + position.coords.heading + '<br />' +
					"Speed: "             + position.coords.speed + '<br />' +
					"Timestamp: "         + position.timestamp;
			alert(s);
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
