const Ride  = require("../models/ride");
const Maps = require("../controllers/maps")

module.exports.getRide = function(req,res){

	let id = req.params.id;
	let start = req.params.startPoint;
	let end = req.params.endPoint;
	let date_in = req.params.date;

	Maps.getRef(id, start, end, date_in, function(err, out){
		res.json(out);
	};
};

module.exports.createRide = function(username,res){

	User.findOne({'username': username}, function(err, user){

		if(user.driver){
			Ride.create({
				driver: user.username,
				startPoint: req.startPoint,
				endPoint: req.endPoint,
				date: req.date
			});
		}else{

			var pass_list = [];
			pass_list.push(user.username);

			Ride.create({
				passengers: pass_list,
				startPoint: req.startPoint,
				endPoint: req.endPoint,
				date: req.date
			});
		}
	});
}





