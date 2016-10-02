const Users = require("../models/user");
const Rides = require("../models/ride");
const Maps = require("../services/maps");
var collection = require('lodash/collection');

module.exports.getMatches = function(start, end, date_in, callback){

	var matches = [];
	var len;

	Users.find({}, function(err, others){

		others.forEach((o)=>{

			Maps.getAPI(start, o.home, function(err, res){

				len = res.rows[0].elements[0].distance.value;

			});

			brick = {username: o.username,
						distance: len,
						name: o.name,
						driver: o.driver,
						location: o.home};

			matches.push(brick);
		});

	});

	var ordered = collection.sortBy(matches, ['distance']);

	var out = {startPoint: start, endPoint: end, date: date_in, matches: ordered};

	callback(null, out);
}