import React, {Component} from 'react'
import { Grid } from 'react-bootstrap'
import { connect } from 'react-redux'

import { connect_socket, send_message } from '../../actions/socket'

import Header from './Header'

@connect((store)=>{
  return {
    tecnicoID : store.user.user.tecnicoID,
    socket : store.user.socket,
  }
})
export default class App extends Component{

  componentDidMount = () => {
    //this.props.dispatch(connect_socket(this.props.tecnicoID))
    // usar o tecnicoID da API, random por agora 
    this.props.dispatch(connect_socket(this.state.from))
  }

  handleSummit = event => {
    event.preventDefault()
    this.props.dispatch(send_message(this.props.socket, this.state.from, this.state.to, "Hello from the other side"))
  } 

  render() {
    if(this.props.children.type.displayName==='Connect(Map)'){
      return <div>
        <Header />
        <div style={{marginTop:'-20px'}}>{this.props.children}</div>
      </div>
      }else{
        return <div>
          <Header />
          <Grid>{this.props.children}</Grid>
        </div>
      }
  }
}
