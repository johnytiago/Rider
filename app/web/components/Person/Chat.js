import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Grid, Panel, Col, Well, Row , Button} from 'react-bootstrap'

import { send_message } from '../../../actions/socket'

@connect((store)=>{
    return {
        msgs: store.user.msgs,
        socket: store.user.socket,
	tecnicoID : store.user.user.tecnicoID,
    }
})
export default class Chat extends Component {

  constructor() {
    super()
    this.state = {
      to: 78058,
      msg: "",
      msgs: [
{from: 78058,
 to: 77969,
 msg: "Hello there"}]
    }
  }

  componentDidMount() {
  }

  handleSummit = event => {
    event.preventDefault()
    if ( event.keyCode === 14 && this.state.msg ) {
	    this.props.dispatch(send_message(this.props.socket, this.props.tecnicoID, Number(this.state.to), this.state.msg))
	    this.setState({ msgs: [{ from: this.props.tecnicoID, to: Number(this.state.to), msg: this.state.msg }, ...this.state.msgs ]})
    }
    event.target.value = ""
  } 

  handleChangeMsg = event => {
    this.setState({msg: event.target.value});
  }

  handleChangeTo = event => {
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
    const messages = this.state.msgs.map((message, index) => { return <Well bsSize="small" key={index} className="msgField" ><b>{message.from}: </b>{message.msg}</Well> })  

    return (
      <Col md={6}>
        <Panel header={'Chat'}>
          <Well bsSize="small">
            <input type="text" 
	      placeholder="Enter the message..."
              value={this.state.msg}
              onChange={this.handleChangeMsg.bind(this)}
	      onKeyUp={this.handleSummit.bind(this)}
            />
          </Well>
	  {messages}
        </Panel>
      </Col>
    )
  }
}
