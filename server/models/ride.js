const mongoose = require('mongoose');

module.exports = mongoose.model('ride', {
	driver: 		String,
	passenger: 		String,
	location:  		String,
	hour: 			String,
	day: 		    String	
});