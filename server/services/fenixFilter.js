var collection = require('lodash/collection');

module.exports = function (data, day, callback){

	var filtered = collection.filter(data[0].events, function(item){return item.classPeriod.start.includes(day)});
	var ordered = collection.sortBy(filtered, [function(o) { return o.classPeriod.start; }, function(o) { return o.classPeriod.end; }]);
	callback(null, ordered);
}