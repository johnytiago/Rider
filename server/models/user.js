const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	username: 		String,
	name: 			String,
	email: 			String,
	driver: 		Boolean,
	campus: 		String,
	phone: 			String,
	home: 	        String,
	calendar: 	[{
					start: Date,
					end: Date,
					acronym: String
				}],
	accessToken: 	String,
	refreshToken: 	String
});