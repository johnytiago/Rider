const express = require('express')

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const routes = require('./routes/routes')

var users = {} 

io.on('connection', socket => {

  socket.on('set_tecnicoID', (tecnicoID, cb) => {
    if ( users[ tecnicoID ] ) 
      return cb("TecnicoID already exists")

    users[tecnicoID] = socket
    socket.tecnicoID = tecnicoID
    console.log( "New socket tecnicoID:", socket.tecnicoID )
    return cb(null)
  })

  socket.on('send_message', (payload, cb) => {
    let { from , to , msg } = payload

    if ( !users[to] ) 
      return cb("TecnicoID doesn't exists")

    users[to].emit('new_message', payload );
    console.log( "Send message\n", "From:", from, "To:", to, "Message:", msg)
    return cb(null)
  })

  // ============== RIDE ================

  socket.on('request_ride', (payload, cb) => {
    let { from , to , time, startpoint, endpoint } = payload

    if ( !users[to] ) 
      return cb("TecnicoID doesn't exists")

    users[to].emit('ride_request', payload );
    console.log( "Ride request\n", "From:", from, "To:", to, "time:", time, "where from:", startpoint, "where to:", endpoint)
    //guardar estado da ride na db
    //enviar mail
    return cb(null)
  })

  socket.on('accept_ride', (payload, cb) => {
    let { from , to , time, startpoint, endpoint } = payload

    if ( !users.to ) 
      return cb("TecnicoID doesn't exists")

    users[to].emit('ride_confirmed', payload );
    console.log( "Ride confirmed\n", "From:", from, "To:", to, "time:", time, "where from:", startpoint, "where to:", endpoint)
    //guardar estado da ride na db
    return cb(null)
  })

  socket.on('reject_ride', (payload, cb) => {
    let { from , to , time, startpoint, endpoint } = payload

    if ( !users.to ) 
      return cb("TecnicoID doesn't exists")

    users[to].emit('ride_rejected', payload );
    console.log( "Ride rejected\n", "From:", from, "To:", to, "time:", time, "where from:", startpoint, "where to:", endpoint)
    //guardar estado da ride na db
    return cb(null)
  })

  // ============== PHONE ================

  socket.on('request_phone', (payload, cb) => {
    let { from , to } = payload

    if ( !users.to ) 
      return cb("TecnicoID doesn't exists")

    users[to].emit('phone_request', payload );
    console.log( "Phone request\n", "From:", from, "To:", to)
    //guardar estado da ride na db
    //enviar mail
    return cb(null)
  })

  socket.on('accept_phone', (payload, cb) => {
    let { from , to } = payload

    if ( !users.to ) 
      return cb("TecnicoID doesn't exists")

    // fetch phone 
    // payload.phone
    users[to].emit('phone_confirmed', payload );
    users[from].emit('phone_confirmed', {from: payload.to, to:payload.from} );
    console.log( "Phone confirmed\n", "From:", from, "To:", to, "Phone:", phone)
    //guardar estado da ride na db
    return cb(null)
  })

  // =================================================

  socket.on('disconnect', () => {
    if ( users[ socket.tecnicoID ] ) {
      delete users[ socket.tecnicoID ]
      console.log('Disconnect tecnicoID:',  socket.tecnicoID );
    }
  });
})

routes(app)

var port = 8080

http.listen( port ,()=>{
    console.log('Server running at http://localhost:' +  port )
})

