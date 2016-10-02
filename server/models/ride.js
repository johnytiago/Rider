const mongoose = require('mongoose');

module.exports = mongoose.model('ride', {
	driver: 		String,
	passenger: 		String,
	startPoint:  	String,
	endPoint:  		String,
	date: 		    Date	
});