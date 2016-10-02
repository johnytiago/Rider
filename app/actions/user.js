import axios from 'axios'
import { connect_socket } from './socket'

export function fetchUser(){
  return (dispatch)=>{
    dispatch({type: "FETCH_USER"})
    axios.get('http://rider.n1z.pt/api/users/me')
    .then((response)=>{
      dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
      connect_socket(response.username)
    })
    .catch((err)=>{
      dispatch({type: "FETCH_USER_REJECTED", payload: err})
    })
  }
}
