import axios from 'axios'

export function fetchUser(){
  return (dispatch)=>{
    dispatch({type: "FETCH_USER"})
    axios.get('/api/users/me')
    .then((response)=>{
      dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
    })
    .catch((err)=>{
      dispatch({type: "FETCH_USER_REJECTED", payload: err})
    })
  }
}
