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

  constructor() {
    super()
    this.state = { from: Math.floor(Math.random()*10000) }
  }

  componentDidMount = () => {
    //this.props.dispatch(connect_socket(this.props.tecnicoID))
    // usar o tecnicoID da API, random por agora 
    this.props.dispatch(connect_socket(this.state.from))
  }

  handleChangeI = event => {
    this.setState({from: event.target.value});
  }
  handleChangeII = event => {
    this.setState({to: event.target.value});
  }

  handleSummit = event => {
    event.preventDefault()
    this.props.dispatch(send_message(this.props.socket, this.state.from, this.state.to, "Hello from the other side"))
  } 

  render() {
    return ( 
      <div>
        <Header />
        FROM:<input type="text" 
          value={this.state.from}
          onChange={this.handleChangeI.bind(this)}
        />
        TO:<input type="text" 
          value={this.state.to}
          onChange={this.handleChangeII.bind(this)}
        />
        <button onClick={this.handleSummit.bind(this)}>
          Send message
        </button>
        <Grid>{this.props.children}</Grid>
      </div>
    )
  }

}
