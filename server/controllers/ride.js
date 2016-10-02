const Rides  = require("../models/ride");
const Users  = require("../models/user");
const Maps = require("../controllers/maps")

module.exports.getRides = function(req, res){

	Rides.find({}, function(err, rides){
		res.json(rides);
	});	
}

module.exports.getRideById = function(req, res){

	Rides.findById(req.params.id, function (err, ride) {
    	res.json(ride);
  	});
}

module.exports.createRide = function(req, res){

	Users.findOne({'username': req.user.username}, function(err, user){

		if(user){

			var date_f = new Date(req.body.date);

			Rides.create({
				startPoint: req.body.startPoint,
				endPoint: req.body.endPoint,
				date: date_f
			});
		}
	});
}