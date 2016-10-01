var collection = require('lodash/collection');
var User = require('../models/user.js');

function getCourseAcronym(fullname) {
	var acronym = '';

	for(i=0; i<fullname.length; i++)
		if((fullname[i] >= 'A') && (fullname[i] <= 'Z')) acronym += fullname[i];

	return acronym;
}

module.exports.filterByDay = function (username, date, callback){

	User.findOne({ 'username' : username}, function(err, user){
		
		var filtered = collection.filter(user.calendar, function(item){
			return date.getFullYear() === item.getFullYear() &&
					date.getMonth() === item.getMonth() &&
					date.getDate() === item.getDate()});

		var ordered = collection.sortBy(filtered, [
			function(o) { return o.start.getHours(); },
			function(o) { return o.start.getMinutes(); },
			function(o) { return o.end.getHours(); }
			function(o) { return o.end.getMinutes(); }]);

		callback(null, ordered);

	});
}

module.exports.addCalendar = function (username, data, callback){

	parsed = [];

	for(i=0; i<data[0].events.length; i++){

		var brick = {acronym: getCourseAcronym(data[0].events[i].course.name),
					start: new Date(data[0].events[i].classPeriod.start),
					end: new Date(data[0].events[i].classPeriod.end)};

		parsed.push(brick);
	}

	User.findOne({ 'username' : username}, function(err, user){
		user.calendar = parsed;
		callback();
	});
}