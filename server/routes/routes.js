const passport = require("passport")
const users =require('../controllers/users')
const calendar =require('../controllers/calendar')
const ride =require('../controllers/ride')
const web = require('./web')

module.exports = (server) => {

    // API
    server.get('/auth/fenix', passport.authenticate('oauth2'))

	server.get('/auth/fenix/callback',
		passport.authenticate('oauth2', { failureRedirect: '/login' }),
	    (req, res)=> { res.redirect('/') }
	)

	server.get('/api/users/:id', users.getUserInfo)
	server.get('/api/calendar/:id/:day', calendar.getDay)
	server.post('/api/rides', ride.createRide)
	server.get('/api/rides/:id', ride.getRide)





 	// web static files
    web(server)

}
