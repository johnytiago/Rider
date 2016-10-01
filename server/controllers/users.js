const Users  = require("../models/user");

module.exports.getUserInfo  = function(req,res) {
	let id = req.params.id
	if (req.params.id==="me"){
		id=req.user.username;
	}
	Users.findOne({username:id},function(err,user){
		let users={
				username: 		user.username,
				name: 			user.name,
				driver: 		user.driver,
				location: 		user.location,
				campus: 		user.campus
			}
		res.json(users);
		

	});
	

};

