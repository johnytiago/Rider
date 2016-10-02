const mongoose = require('mongoose');

module.exports = mongoose.model('ride', {
	driver: 		String,
	passengers: 	[String],
	startPoint:  	String,
	endPoint:  		String,
	date: 		    Date	
});