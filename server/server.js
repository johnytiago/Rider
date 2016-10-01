const server = require('express')()
const passport = require("passport")
const mongoose = require("mongoose")

const routes = require('./routes/routes')



require("./config/passport")( passport )
require("./config/express")( server, passport )

mongoose.connect('mongodb://localhost:27017/rider')
server.get('/auth/fenix', passport.authenticate('oauth2'))

server.get('/auth/fenix/callback',
			passport.authenticate('oauth2', { failureRedirect: '/login' }),
	    	function(req, res) { res.redirect('/'); }
	);
routes(server)
var port = process.env.PORT || 8080
server.listen( port ,()=>{
  console.log('Server running at http://localhost:' +  port )
})
