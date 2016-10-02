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
      return dispatch({ type: "SOCKET_NEW_MESSAGE_FULFILLED", payload })
    })

    socket.on('phone_request', (payload) => {
      return dispatch({ type: "SOCKET_NEW_PHONE_REQUEST", payload })
    })

    socket.on('accept_phone', (payload) => {
      return dispatch({ type: "SOCKET_REQUEST_PHONE_FULFILLED", payload })
    })

    socket.on('reconnect_failed', 'error', (err) => {
      dispatch({ type: "SOCKET_CONNECT_USER_REJECTED", payload: err })
    })
  }
}

export function send_message(socket, from, to, message){
  return (dispatch) => {
    dispatch({type: "SOCKET_SEND_MESSAGE"})
    
    let msg = { from, to: to , msg: message, when: Date.now() }

    socket.emit('send_message', msg , (err) => {
      if ( err )
        return dispatch({ type: "SOCKET_SEND_MESSAGE_REJECTED", payload: err })
      return dispatch({ type: "SOCKET_SEND_MESSAGE_FULFILLED", payload: msg })
    })
  }
}

export function request_phone(socket, from, to){
  return (dispatch) => {
    socket.emit('request_phone', {from, to} , (err) => {
      if ( err )
        return dispatch({ type: "SOCKET_REQUEST_PHONE_ERROR", payload: err })
      return dispatch({type: "SOCKET_REQUEST_PHONE"})
    })
  }
}

export function accept_phone(socket, from, to){
  return (dispatch) => {
    socket.emit('accept_phone', {from, to} , (err) => {
      if ( err )
        return dispatch({ type: "SOCKET_REQUEST_PHONE_ERROR", payload: err })
      return dispatch({type: "SOCKET_REQUEST_PHONE"})
    })
  }
}
