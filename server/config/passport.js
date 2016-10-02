var OAuth2  = require("passport-oauth2").Strategy,
    fenix   = require("../services/fenix"),
    User    = require("../models/user");
    Filter = require("../controllers/fenixResponseFilter");

module.exports = function(passport){

    // get username from fenix login
    OAuth2.prototype.userProfile = function(token,done){
        var result = {};
        fenix.person(token,function(err,user){
            
            
            result.username = user.username;
            result.name = user.name;
            result.email = user.email;
            result.campus = user.campus;
            result.accessToken = user.accessToken;
            result.refreshToken = user.refreshToken;

            return done(null, result);
            
        });
    }; 


    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        
        done(null, user.username);
    });

    // used to deserialize the user
    passport.deserializeUser(function(username, done) {
        User.find({username : username}, function(err, user) {
            done(err, user[0]);
        });
    });


    // fenix api endpoints
    passport.use(new OAuth2({
            authorizationURL: 'https://fenix.tecnico.ulisboa.pt/oauth/userdialog',
            tokenURL: 'https://fenix.tecnico.ulisboa.pt/oauth/access_token',
            clientID: "1695915081465870",
            clientSecret: "NCwwzZYQcRNn5aJzYcatEwOp/R4UIJO2ybasERa9tpH7U+DuJO/+E3ZVZc5dd568cGIr5ryH9lC2qQrPPJte+w==",
            callbackURL: "http://rider.n1z.pt/auth/fenix/callback"
        },
        function(accessToken, refreshToken, profile, done) {

            User.findOne({ 'username' : profile.username }, function(err, user) {

                if (err)
                    return done(err);

                if (user) {
                    user.accessToken = accessToken;
                    user.name = profile.name;
                    user.save()

                    fenix.calendar(accessToken ,function(err,res){
                        Filter.addCalendar(profile.username,res,function(err,out){});
                    });

                    return done(null, user);
                }
                else {
                            
                    User.create({
                        username :      profile.username,
                        name :          profile.name,
                        email:          profile.email,
                        campus:         profile.campus,
                        accessToken :  accessToken,
                        refreshToken : refreshToken

                    }, function(err,user){
                        if (err)
                            return done(err);

                        fenix.calendar(accessToken ,function(err,res){
                            Filter.addCalendar(profile.username,res,function(err,out){});
                        });
                        
                        return done(null, user);
                    })
                }

               
               
                    

            })
        }
    ));

};