const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	username: 		String,
	name: 			String,
	email: 			String,
	campus: 		String,
	phone: 			String,
	accessToken: 	String,
	refreshToken: 	String
});