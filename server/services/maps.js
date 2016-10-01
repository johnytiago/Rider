var User = require('../models/user');
var maps = require('google-distance-matrix');
var mongoose = require('mongoose');
maps.key('AIzaSyC-qJIco1wDX3pwz4bCD8aVNfQrFmn6Vwk');

module.exports.usersInRadius = function(coordinates, radius, callback){

	User.find({}, function(err, users){

		var results = [];

		asyncLoop(users.length, function(loop){
			maps.matrix(coordinates, 'users.coordinates', function (err, distances){
				if(distances <= radius) results.push({istID: 'users.istID'});
				loop.next();
			});
		});
	});
};
	
	

	


	

