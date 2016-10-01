var collection = require('lodash/collection');

module.exports = function (data, day, callback){

	var filtered = collection.filter(data[0].events, function(item){return item.classPeriod.start.includes(day)});
	var ordered = collection.sortBy(filtered, [function(o) { return o.classPeriod.start; }, function(o) { return o.classPeriod.end; }]);
	
	var output = [];

	function getCourseAcronym(fullname) {
		var acronym = '';

		for(i=0; i<fullname.length; i++){
			if((fullname[i] >= 'A') && (fullname[i] <= 'Z')) acronym.concat(str[i]);
		}

		return acronym;
	}

	for(i=0; i<ordered.length; i++){
		output.push({'name': getCourseAcronym(ordered[i].course.name), 'start': ordered[i].classPeriod.start.substring(11), 'end': ordered[i].classPeriod.end.substring(11)});
	}
	
	callback(null, output);
}