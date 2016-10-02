const Ride  = require("../models/ride");
const Maps = require("../controllers/maps")

module.exports.getRides  = function(req,res) {

	

};

module.exports.createRide  = function(req,res){

	var ride = new Ride({
		startPoint: req.startPoint,
		endPoint: req.endPoint,
		date: req.date
	});

	ride.save(function(err, out){

		


	})





	

};




