var collection = require('lodash/collection');
var User = require('../models/user');

function getCourseAcronym(fullname) {
	var acronym = '';

	for(i=0; i<fullname.length; i++)
		if((fullname[i] >= 'A') && (fullname[i] <= 'Z')) acronym += fullname[i];

	return acronym;
}

module.exports.filterByDay = function (username, date_str, callback){

	console.log(date_str);
	var date = new Date(date_str);
	console.log(date);

	User.findOne({ 'username' : username}, function(err, user){
		
		var filtered = collection.filter(user.calendar, function(item){
			return date.getFullYear() === item.getFullYear() &&
					date.getMonth() === item.getMonth() &&
					date.getDate() === item.getDate()});

		var ordered = collection.sortBy(filtered, [
			function(o) { return o.start.getHours(); },
			function(o) { return o.start.getMinutes(); },
			function(o) { return o.end.getHours(); },
			function(o) { return o.end.getMinutes(); }]);

		callback(null, ordered);

	});
}

module.exports.addCalendar = function (username, data, callback){

	var parsed = [];
	var brick;
	var start_date;
	var end_date;
	
	data.events.forEach((e)=> {

		start_date = e.classPeriod.start;
		end_date = e.classPeriod.end;
		
		brick = {acronym: getCourseAcronym(e.course.name),
				start: start_date,
				end: end_date};

		parsed.push(brick);

	})

	User.findOne({ 'username' : username}, function(err, user){

		user.calendar = parsed;
		user.save();
		callback();
	});
}