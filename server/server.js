
const server = require('express')()
const routes = require('./routes/routes')

routes(server)

var port = 8080
server.listen( port ,()=>{
  console.log('Server running at http://localhost:' +  port )
})
