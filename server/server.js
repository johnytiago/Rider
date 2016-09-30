const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");

const server = express();
const routes = require('./routes/routes')

routes(server)

require("./server/config/passport")(passport);
require("./server/config/express")(server,passport);

mongoose.connect('mongodb://localhost:27017/rider');
server.get('/auth/fenix',passport.authenticate('oauth2'));

var port = process.env.PORT || 8080;
server.listen( port ,()=>{
  console.log('Server running at http://localhost:' +  port )
})