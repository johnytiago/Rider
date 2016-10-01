const Users = require("../models/user");
const Maps = require("../services/maps")

module.exports.getMatches = function(req, res){

	var matches = [];
	var len;

	Users.findOne({'username' = id}, function(err, user){

		Users.find({}, function(err, others){

			others.forEach((o)=>{

				Maps.getAPI(user.home, o.home, function(err, res){

					len = res.rows[0].elements[0].distance.value;

				});

				brick = {o.username, len, o.name, o.driver, o.home};
				matches.push(brick);
			});

		});
	});
}