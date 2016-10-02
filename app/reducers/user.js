export default function reducer(state={
  user : {
    tecnicoID: null,
    username: null,
  },
  msgs: { },
  phones: { },
  socket: null,
  fetching: false,
  fetched: false,
  sending: false,
  sent: false,
  error: null
}, action){
  if(action.type === "FETCH_USER")
    return {...state, fetching: true}
  if(action.type === "FETCH_USER_FULFILLED")
    return {
      ...state,
      user: {
        tecnicoID : action.payload.tecnicoID,
        username : action.payload.username
      },
      fetching: false,
      fetched: true,
      error: null
    }
  if(action.type === "FETCH_USER_REJECTED")
    return {...state, fetching: false, error: action.payload}

  if(action.type === "SOCKET_CONNECT_USER")
    return {...state, fetching: true }
  if(action.type === "SOCKET_CONNECT_USER_FULFILLED")
    return {
      ...state,
      socket : action.payload,
      fetching: false,
      fetched: true,
      error: null
    }
  if(action.type === "SOCKET_CONNECT_USER_REJECTED")
    return {
      ...state,
      fetching: false,
      error: action.payload
    }

  if(action.type === "SOCKET_SEND_MESSAGE")
    return {...state, sending: true }
  if(action.type === "SOCKET_SEND_MESSAGE_FULFILLED"){
    let { from, to, msg, when } = action.payload
    msgs.to = [ ...msgs[to], { from, to, msg, when }]
    return {
      ...state,
      msgs, 
      sending: false,
      sent: true,
      error: null
    }
  }
  if(action.type === "SOCKET_SEND_MESSAGE_REJECTED")
    return {
      ...state,
      fetching: false,
      error: action.payload
    }

  if(action.type === "SOCKET_NEW_MESSAGE_FULFILLED"){
    let { from, to, msg, when } = action.payload
    msgs.from = [ ...msgs.from, { from, to, msg, when }]
    return {
      ...state,
      msgs,
      sending: false,
      sent: true,
      error: null
    }
  }

  if(action.type === "SOCKET_REQUEST_PHONE") {
    let phones = { ...phones, phones[action.payload]: {pending: true}}
    return {...state, phones }
  }
  if(action.type === "SOCKET_REQUEST_PHONE_ERROR") {
    return {...state, error: action.payload }
  }
  if(action.type === "SOCKET_REQUEST_PHONE_FULFILLED"){
    let { from, phone: num } = action.payload
    let phone = { phone: num, pending: false }
    let phones = { ...phones, phones[from]: phone}
    return {...state, phones }
  }

  return state
}
