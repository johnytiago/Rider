export default function reducer(state={
  user : {
    tecnicoID: null,
    username: null,
    campus: null
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
        tecnicoID : Number(action.payload.username),
        username : action.payload.name,
        campus : action.payload.campus,
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
    if (!state.msgs[to])
      state.msgs[to] = [{ from, to, msg, when }]
    state.msgs[to] = [ ...state.msgs[to], { from, to, msg, when }]
    return {
      ...state,
      msgs: state.msgs, 
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
    if (!state.msgs[from])
      state.msgs[from] = [{ from, to, msg, when }]
    state.msgs[from] = [ ...state.msgs[to], { from, to, msg, when }]
    return {
      ...state,
      msgs: state.msgs,
      sending: false,
      sent: true,
      error: null
    }
  }

  if(action.type === "SOCKET_PHONE_REQUEST") {
    let tecnicoID = action.payload
    phones[tecnicoID] = { pending: true }
    return {
      ...state, 
      phones 
    }
  }
  if(action.type === "SOCKET_PHONE_REQUEST_ERROR") {
    return {...state, error: action.payload }
  }
  if(action.type === "SOCKET_PHONE_REQUEST_FULFILLED"){
    let { from, phone: num } = action.payload
    phones[from] = { phone: num, pending: false }
    return {...state, phones }
  }

  return state
}
