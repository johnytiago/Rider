const server = require('express')()
const passport = require("passport")
const mongoose = require("mongoose")

const routes = require('./routes/routes')
const ride 	 = require('./controllers/ride')
const fenix  = require('./services/fenix')

require("./config/passport")( passport )
require("./config/express")( server, passport )

mongoose.connect('mongodb://localhost:27017/rider')
server.get('/auth/fenix', passport.authenticate('oauth2'))

server.get('/auth/fenix/callback',
			passport.authenticate('oauth2', { failureRedirect: '/login' }),
	    	function(req, res) { res.redirect('/'); }
	);
server.get('/api/allDriverRides/', ride.getAllDriverRides);
server.get('/api/allPassengerRides/', ride.getAllPassengerRides);
server.get('/api/driverRide/', ride.getDriverRide);
server.get('/api/passengerRide/', ride.getPassengerRide);
server.get('/api/schedule/', fenix.schedule);
routes(server)
var port = process.env.PORT || 8080
server.listen( port ,()=>{
  console.log('Server running at http://localhost:' +  port )
})
