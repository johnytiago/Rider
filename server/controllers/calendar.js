const User  = require("../models/user");
const Filter = require("./fenixResponseFilter");
const Fenix  = require("../services/fenix");
module.exports.getDay  = function(req,res) {

	let id = req.params.id
	if (req.params.id==="me"){
		id=req.user.username;
	}

	Filter.filterByDay(id,req.params.day,function(err,calendar){
		var response = {
			date: req.params.day,
			events: calendar
		}
		res.json(response);
	});

};
