const request = require("request");

module.exports.getAPI = function(origins, destinations, callback){
	request('https://maps.googleapis.com/maps/api/distancematrix/json?origins='+origins+'&destinations='+destinations+'&mode=driving&key='+'AIzaSyC-qJIco1wDX3pwz4bCD8aVNfQrFmn6Vwk',
	function (err, res, body) {
		console.log("\tDOCUMENT json response");
		callback(err,JSON.parse(body));
  	});
};
