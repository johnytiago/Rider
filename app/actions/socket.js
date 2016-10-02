import io from 'socket.io-client'

export function connect_socket(tecnicoID){
  return (dispatch) => {
    let socket = io()

    dispatch({ type: "SOCKET_CONNECT_USER" })

    socket.emit('set_tecnicoID', tecnicoID, (err) => {
      if ( err )
        return dispatch({ type: "SOCKET_CONNECT_USER_REJECTED", payload: err })
      dispatch({ type: "SOCKET_CONNECT_USER_FULFILLED", payload: socket })
    })

    socket.on('new_message', (payload) => {
      console.log("New message", payload)
      return dispatch({ type: "SOCKET_NEW_MESSAGE_FULFILLED", payload })
    })

    socket.on('phone_request', (payload) => {
      return dispatch({ type: "SOCKET_PHONE_REQUEST", payload })
    })

    socket.on('phone_confirmed', (payload) => {
      return dispatch({ type: "SOCKET_PHONE_REQUEST_FULFILLED", payload })
    })

    socket.on('ride_request', (payload) => {
      return dispatch({ type: "SOCKET_RIDE_REQUEST", payload })
    })

    socket.on('ride_confirmed', (payload) => {
      return dispatch({ type: "SOCKET_RIDE_REQUEST_FULFILLED", payload })
    })

    socket.on('ride_rejected', (payload) => {
      return dispatch({ type: "SOCKET_RIDE_REQUEST_REJECTED", payload })
    })

    socket.on('reconnect_failed', 'error', (err) => {
      dispatch({ type: "SOCKET_CONNECT_USER_REJECTED", payload: err })
    })
  }
}

export function send_message(socket, from, to, message){
  return (dispatch) => {
    dispatch({type: "SOCKET_SEND_MESSAGE"})
    
	console.log(from, to, message)
    let msg = { from, to: to , msg: message, when: Date.now() }

    socket.emit('send_message', msg , (err) => {
      if ( err )
        return dispatch({ type: "SOCKET_SEND_MESSAGE_REJECTED", payload: err })
      return dispatch({ type: "SOCKET_SEND_MESSAGE_FULFILLED", payload: msg })
    })
  }
}

export function request_phone(socket, from, to, email){
  return (dispatch) => {
    socket.emit('request_phone', {from, to, email} , (err) => {
      if ( err )
        return dispatch({ type: "SOCKET_PHONE_REQUEST_ERROR", payload: err })
      return dispatch({type: "SOCKET_PHONE_REQUEST"}, payload: to)
    })
  }
}

export function accept_phone(socket, from, to){
  return (dispatch) => {
    socket.emit('accept_phone', {from, to} , (err) => {
      if ( err )
        return dispatch({ type: "SOCKET_PHONE_REQUEST_ERROR", payload: err })
    })
  }
}
