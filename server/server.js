const server = require('express')()
const passport = require("passport")
const mongoose = require("mongoose")

const routes = require('./routes/routes')



require("./config/passport")( passport )
require("./config/express")( server, passport )

mongoose.connect('mongodb://localhost:27017/rider')

routes(server)
var port = process.env.PORT || 8080
server.listen( port ,()=>{
  console.log('Server running at http://localhost:' +  port )
})
