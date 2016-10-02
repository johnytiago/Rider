import React, {Component} from 'react'
import { FormGroup,ControlLabel,FormControl, Button,Row,Glyphicon, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { setTmpRideLocation } from '../../../actions/rides.js'

@connect((store)=>{
    return {
        from : store.rides.tmp.from,
        to: store.rides.tmp.to
    }
})
export default class List extends Component {

    handleFrom(e){
        this.props.dispatch(setTmpRideLocation(e.target.value,this.props.to))
    }
    handleTo(e){
        this.props.dispatch(setTmpRideLocation(this.props.from,e.target.value))
    }

    render(){
        let hours = this.props.hours.map(hour => <ListGroupItem href="#">
            {hour}
        </ListGroupItem>)
        let msg = null
        let confirm = null
        if(hours.length==0)
            msg = 'No hours selected on Schedule!'
        else
            confirm = <div style={{textAlign:'right'}}>
                 <Link to='map'>
                    <Button bsStyle="success">Confirm rides <Glyphicon glyph="play" /> </Button>
                </Link>
            </div>

        let footer = <div>
            <Row>
                <Col xs={6}>
                <FormGroup controlId="startpoint">
                  <ControlLabel>Start point</ControlLabel>
                  <FormControl onChange={this.handleFrom} componentClass="select" placeholder="Start point">
                    <option value="home">Home</option>
                    <option value="tagus">Tagus</option>
                    <option value="alameda">Alameda</option>
                  </FormControl>
                </FormGroup>
                </Col>
                <Col xs={6}>
                <FormGroup controlId="endpoint">
                  <ControlLabel>End point</ControlLabel>
                  <FormControl onChange={this.handleTo} componentClass="select" placeholder="End point">
                    <option value="Tagus">Tagus</option>
                    <option value="Alameda">Alameda</option>
                    <option value="Home">Home</option>
                  </FormControl>
                </FormGroup>
                </Col>
            </Row>
            {confirm}
        </div>
        return <Panel header='Rides list' footer={footer}>
            {msg}
            <ListGroup fill>
                {hours}
            </ListGroup>
        </Panel>
    }

}
