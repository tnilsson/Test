//
//
//
"use strict";

var i, s;

var gw2 = {
	worlds: null,
	matches: null,
	details: {
		points: {
			red: 0,
			blue: 0,
			green: 0
		}
	},

	// init
	init: function() {
		$.ajax("https://api.guildwars2.com/v1/world_names.json", {
			// success
			success: function(data, status, xhr) {
				gw2.worlds = data;

				$.ajax("https://api.guildwars2.com/v1/wvw/matches.json", {
					// success
					success: function(data, status, xhr) {
						gw2.matches = data;
						// gw2.matches.sort();
						// gw2.matches.render();

						// render matches
						var m = gw2.matches.wvw_matches;
						var redWorld, blueWorld, greenWorld;
						var elm = $("#matches ul").html("");

						for (i = 0; i < m.length; i++) {
							redWorld   = gw2.mapWorldName(m[i].red_world_id);
							blueWorld  = gw2.mapWorldName(m[i].blue_world_id);
							greenWorld = gw2.mapWorldName(m[i].green_world_id);

							s = "<li data-match-id='" + m[i].wvw_match_id + "'><a href='#'><span class='red'>" + redWorld + "</span> vs <span class='blue'>" + blueWorld + "</span> vs <span class='green'>" + greenWorld + "</span></a></li>";
							elm.append(s);
						}
					},

					// error getting matches
					error: function() {
						console.log("Error getting matches");
					}
				});
			},

			// error handler
			error: function() {
				console.log("Error getting world names");
			}
		});
	},

	// get world names
	mapWorldName: function(id) {
		id = id.toString();

		for (var i = 0; i < gw2.worlds.length; i++) {
			if (gw2.worlds[i].id === id) {
				return(gw2.worlds[i].name);
			}
		}
		
		return "Unknown server id";
	},

	getMatchDetails: {
		// get match details
		get: function(matchId) {
			if (!matchId) {
				console.log("No match id supplied");
				return;
			}

			$.ajax("https://api.guildwars2.com/v1/wvw/match_details.json", {
				data: {
					"match_id": matchId
				},

				success: function(data, status, xhr) {
					gw2.details.data = data;
				},

				error: function() {
					console.log("Error getting matches");
				}
			});
		},

		// render match score
		renderScore: function() {
			// gw2.details.data
		},

		// render match objectives
		renderObjectives: function() {
		}
	}
}

$(document).ready(function() {
	gw2.init();
});
