import React, {Component} from 'react'
import { Grid } from 'react-bootstrap'
import { connect } from 'react-redux'

import { connect_socket, send_message } from '../../actions/socket'
import { fetchUser } from '../../actions/user'

import Header from './Header'

@connect((store)=>{
  return {
    tecnicoID : store.user.user.tecnicoID,
    socket : store.user.socket,
  }
})
export default class App extends Component{

  componentDidMount = () => {
    this.props.dispatch(fetchUser())
    setTimeout(() => {
      this.props.dispatch(connect_socket(this.props.tecnicoID))
    }, 1000)
  }

  render() {
    if(this.props.children.type.displayName==='Connect(Map)'){
      return <div>
        <Header />
        <div style={{marginTop:'-20px'}}>{this.props.children}</div>
      </div>
      }else{
        return <div>
          <h1>this.props.tecnicoID</h1>
          <Header />
          <Grid>{this.props.children}</Grid>
        </div>
      }
  }
}
