export default function reducer(state={
    rides : {},
    tmp : {
        rides: [],
        from: 'Home',
        to: 'Tagus'
    },
    fetching : false,
    fetched : false,
    error: null
}, action){

    if(action.type === "FETCH_RIDES")
        return {...state, fetching: true}
    if(action.type === "FETCH_RIDES_FULFILLED"){
        let rides = state.rides.concat(action.payload)
        return {
            ...state,
            rides: rides,
            fetching : false,
            fetched : true,
            error: null
        }
    }

    if(action.type === "SET_TMP_RIDE_LOCATION"){
        let tmpRides = state.tmp.rides.concat([])
        return {...state, tmp:{rider: tmpRides,from: action.payload.f, to: action.payload.t}}
    }

    if(action.type === "ADD_TMP_RIDE"){
        let rides = state.tmp.rides.concat([action.payload])
        let f = state.tmp.from
        let t = state.tmp.to
        return {
            ...state,
            tmp: {
                from: f,
                to: t,
                rides
            }
        }
    }
    if(action.type === "REMOVE_TMP_RIDE"){
        let rides = state.tmp.rides.concat([])
        rides.splice(rides.indexOf(action.payload),1)
        let f = state.tmp.from
        let t = state.tmp.to
        return {
            ...state,
            tmp: {
                from: f,
                to: t,
                rides
            }
        }
    }
    return state

  if(action.type === "SOCKET_RIDE_REQUEST") {
    let { driver, startpoint, endpoint, time } = action.payload
    if (!state.rides[driver])
      state.rides[driver] = [{ driver, startpoint, endpoint, time, status: 1 }]
    state.msgs[driver] = [ ...state.rides[driver], { driver, startpoint, endpoint, time, status: 1  }]
    return {
      ...state,
      rides: state.rides,
      fetching: true,
      fetched: false,
      error: null
    }
  }
  if(action.type === "SOCKET_RIDE_REQUEST_ERROR")
    return {
      ...state,
      fetching: false,
      fetched: true,
      error: action.payload
    }
  if(action.type === "SOCKET_RIDE_REQUEST_FULFILLED"){
    let { driver, startpoint, endpoint, time } = action.payload
    state.msgs[driver] = [ ...state.rides[driver], { driver, startpoint, endpoint, time, status: 2  }]
    return {
      ...state,
      rides: state.rides,
      fetching: false,
      fetched: true,
      error: null
    }
  }
  if(action.type === "SOCKET_RIDE_REQUEST_REJECTED"){
    let { driver, startpoint, endpoint, time } = action.payload
    state.msgs[driver] = [ ...state.rides[driver], { driver, startpoint, endpoint, time, status: 3 }]
    return {
      ...state,
      rides: state.rides,
      fetching: false,
      fetched: true,
      error: null
    }
  }
}
