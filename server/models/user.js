const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	username: 		String,
	name: 			String,
	istID:  		String,
	email: 			String,
	phone: 			String,
	accessToken: 	String,
	refreshToken: 	String
});