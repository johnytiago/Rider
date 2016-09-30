
const server = require('express')()
const routes = require('./routes/routes')

routes(server)

server.listen(80,()=>{
    console.log('Server running...')
})
