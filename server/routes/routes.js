const users =require('../controllers/users')
const calendar =require('../controllers/calendar')
const ride =require('../controllers/ride')
const web = require('./web')

function isLoggedIn(req,res,next){
	if (req.isAuthenticated()) return next();
	res.redirect('/');
}

module.exports = (server, passport) => {

    // API
    server.get('/auth/fenix', passport.authenticate('oauth2'))

	server.get('/auth/fenix/callback',
		passport.authenticate('oauth2', { failureRedirect: '/login' }),
	    (req, res)=> { res.redirect('/') }
	)

	server.get('/logout', function(req, res) {
    	req.logout();
    	res.redirect('/');
	});

	server.get('/api/users/:id', isLoggedIn, users.getUserInfo)
	server.post('/api/users/:id', isLoggedIn, users.addUserInfo)
	server.get('/api/calendar/:id/:day', isLoggedIn, calendar.getDay)
	server.post('/api/rides', isLoggedIn, ride.createRide)
	server.get('/api/rides/', isLoggedIn, ride.getRides)
	server.get('/api/rides/:id', isLoggedIn,  ride.getRideById)


 	// web static files
    web(server)

}
