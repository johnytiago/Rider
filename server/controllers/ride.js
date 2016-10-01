const Ride  = require("../models/ride");

module.exports.getAllDriverRides  = function(req,res) {

	console.log("\nGET /api/allDriverRides/");
	console.log(req.user.username);
  	
  	Ride.findOne({driver:req.user.username}, 
    	function (err, result) {
    		console.log("\tDOCUMENT json response");
        	res.json(result);
      	}
    );

};

module.exports.getAllPassengerRides  = function(req,res) {

	console.log("\nGET /api/allPassengerRides/");
	console.log(req.user.username);
  	
  	Ride.findOne({driver:req.user.username}, 
    	function (err, result) {
    		console.log("\tDOCUMENT json response");
        	res.json(result);
      	}
    );

};

module.exports.getDriverRide  = function(req,res) {

	console.log("\nGET /api/driverRide/");
	console.log(req.user.username);
  	
  	

	Ride.findOne({driver:req.user.username, day:req.params.day, hour:req.params.hour }, 
    	function (err, result) {
    		console.log("\tDOCUMENT json response");
        	res.json(result);
      	}
    );

};

module.exports.getPassengerRide  = function(req,res) {

	console.log("\nGET /api/passengerRide/");
	console.log(req.user.username);
  	
  	

	Ride.findOne({passenger:req.user.username, day:req.params.day, hour:req.params.hour }, 
    	function (err, result) {
    		console.log("\tDOCUMENT json response");
        	res.json(result);
      	}
    );

};



