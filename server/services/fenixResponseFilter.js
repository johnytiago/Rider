var collection = require('lodash/collection');

module.exports = function (data, day, callback){

	var filtered = collection.filter(data[0].events, function(item){return item.classPeriod.start.includes(day)});
	var ordered = collection.sortBy(filtered, [function(o) { return o.classPeriod.start; }, function(o) { return o.classPeriod.end; }]);

	var output = [];

	function getCourseAcronym(fullname) {
		var acronym = '';

		for(i=0; i<fullname.length; i++)
			if((fullname[i] >= 'A') && (fullname[i] <= 'Z')) acronym += fullname[i];
	
		return acronym;
	}

	for(j=0; j<ordered.length; j++){
		var brick = {name: getCourseAcronym(ordered[j].course.name),
					start: ordered[j].classPeriod.start.substring(11),
					end: ordered[j].classPeriod.end.substring(11)};

		output.push(brick);
	}
	
	callback(null, output);
}