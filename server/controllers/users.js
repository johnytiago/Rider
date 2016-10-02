const Users  = require("../models/user");

module.exports.getUserInfo  = function(req,res) {
	let id = req.params.id
	if (req.params.id==="me"){
		id=req.user.username;
	}
	Users.findOne({username:id},function(err,user){
		let users={
				username: 		user.username.substring(4),
				name: 			user.name,
				driver: 		user.driver,
				location: 		user.location,
				campus: 		user.campus
			}
		res.json(users);
		

	});
	

};

module.exports.addUserInfo  = function(req,res) {
	let id = req.params.id
	if (req.params.id==="me"){
		id=req.user.username;
	}
	Users.findOne({username:id},function(err,user){
		var Users = new Users({
				driver: 		req.body.driver,
				location: 		req.body.location
		});

		console.log("\tUsers: "+id);

		Users.save(function(err,data){
				if(!err){
					console.log("\tJSON saved");
					res.json(data);
				}
				
		});
		

	});
	

};






