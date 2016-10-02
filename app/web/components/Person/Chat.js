import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Grid, Panel, Col, Well, Row } from 'react-bootstrap'

import { send_message } from '../../../actions/socket'

@connect((store)=>{
    return {
        msgs: store.user.msgs,
        socket: store.user.socket
    }
})
export default class Chat extends Component {

  constructor() {
    super()
    this.state = {
      form: 78059
    }
  }

  componentDidMount() {
  }

  handleSummit = event => {
    event.preventDefault()
    this.props.dispatch(send_message(this.props.socket, this.state.from, this.props.route.driverID, "Hello from the other side"))
  } 

  handleChangeI = event => {
    this.setState({from: event.target.value});
  }

  handleChangeII = event => {
    this.setState({to: event.target.value});
  }

  //renderMessages = () => {
    //let m = this.props.msgs[this.props.driverID]
    //if (m){
        //m.map( msg => {
          //if ( msg.from !== this.props.driverID )
            //return <Row key={Math.random()*100000}><Col sm={3}/><Col sm={9}><Well><span className="sender"><b>msg.from</b></span>: msg.msg</Well></Col></Row>
          //return <Row key={Math.random()*100000}><Well><span className="sender"><b>msg.from</b></span>: msg.msg</Well></Col><Col sm={3}/></Row>
        //}) 
    //}
  //}

  render() {
    //const messages = 
      //let m = this.props.msgs[this.props.driverID]
      //if (m) {
        //m.map((message, index) => {
          //return <li key={index}><b>{message.from}:</b>{message.body}</li>
        //})
      //} 

    return (
      <Col md={6}>
        <Panel header={'Chat'}>
          <Well>
          {{messages}}
          </Well>
          <Well>
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
          </Well>
        </Panel>
      </Col>
    )
  }
}
