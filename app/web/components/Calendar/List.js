import React, {Component} from 'react'
import { Button,Row,Glyphicon, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router'

export default class List extends Component {

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

        return <Panel header='Rides list' footer={confirm}>
            {msg}
            <ListGroup fill>
                {hours}
            </ListGroup>
        </Panel>
    }

}
