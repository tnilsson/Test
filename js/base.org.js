//
//
//
"use strict";

var i, s;

var gw2 = {
	getData: function() {
		gw2.worlds.get();
		gw2.matches.get();
	},

	// worlds
	worlds: {
		// data holder
		names: null,

		// get world names
		get: function() {
			if (!gw2.worlds.names) {
				$.ajax("https://api.guildwars2.com/v1/world_names.json", {
					success: function(data, status, xhr) {
						gw2.worlds.names = data;
					},

					error: function() {
						console.log("Error getting world names");
					}
				});
			}
		},

		getName: function(id) {
			for (var i = 0; i < gw2.worlds.names.length; i++) {
				if (gw2.worlds.names[i].id === id) {
					return this.name
				}
			}
		}
	},

	// matches
	matches: {
		// matches holder
		list: null,

		// get match list
		get: function() {
			$.ajax("https://api.guildwars2.com/v1/wvw/matches.json", {
				success: function(data, status, xhr) {
					gw2.matches.list = data;
					gw2.matches.sort();
					gw2.matches.render();
				},
				error: function() {
					console.log("Error getting matches");
				}
			});
		},

		// sort matches
		sort: function() {
		},

		// render matches
		render: function() {
			var m = gw2.matches.list.wvw_matches;
			var w1, w2, w3;
			var elm = $("#matches ul");

			for (i = 0; i < m.length; i++) {
				
				s = "<li>" + m[i].red_world_id + " vs " + m[i].blue_world_id + " vs " + m[i].green_world_id + "</li>";
				console.log(gw2.worlds.getName(m[i].red_world_id));
				elm.append(s);
			}
		}
	},

	details: {
		// data holder
		data: null,

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
	gw2.getData();
});
