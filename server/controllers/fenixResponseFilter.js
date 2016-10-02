var collection = require('lodash/collection');
var User = require('../models/user');

function getCourseAcronym(fullname) {
	var acronym = '';

	for(i=0; i<fullname.length; i++)
		if((fullname[i] >= 'A') && (fullname[i] <= 'Z')) acronym += fullname[i];

	return acronym;
}

module.exports.filterByDay = function (username, date_str, callback){

	var date = new Date(date_str);
	console.log(date_str);
	console.log(date);

	User.findOne({'username': username}, function(err, user){

		var filtered = collection.filter(user.calendar, function(item){

			return date.getFullYear() === item.start.getFullYear() &&
					date.getMonth() === item.start.getMonth() &&
					date.getDate() === item.start.getDate()});

		console.log(filtered);
		
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
	var start;
	var end;
	var start_str;
	var end_str;
	
	data.events.forEach((e)=> {

		start = e.classPeriod.start;
		end = e.classPeriod.end;

		start_str = start.substring(6, 10) + '-' + start.substring(3, 5) + '-' + start.substring(0, 2) + ' ' + start.substring(11);
		end_str = end.substring(6, 10) + '-' + end.substring(3, 5) + '-' + end.substring(0, 2) + ' ' + end.substring(11);
		
		start_date = new Date(start_str);
		end_date = new Date(end_str);

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