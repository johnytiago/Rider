
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Row, Image, Panel, Button, Col, Glyphicon, Grid,ListGroup,ListGroupItem } from 'react-bootstrap'

import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

import Navigation from '../Navigation/Navigation'
import List from '../Calendar/List'

@connect((store)=>{
    return {
        calendar : store.calendar.calendar,
        tmp : store.rides.tmp,
        error : store.calendar.error
    }
})
export default class Person extends Component {

    constructor(){
        super()
        this.state = {
            hours : []
        }
    }

    render(){
        this.state.hours = this.props.tmp
        let footer = <div>
            <Button bsStyle='primary'><Glyphicon glyph="phone" /> Ask for phone number</Button>
            <span class='pull-right'>
                <Button bsStyle='success'><Glyphicon glyph="ok" /> Confirm ride</Button>
            </span>
        </div>
        return <div>
            <Navigation state='person' />
            <br />
            <Row>
                <Col md={6}>
                <Panel header='Ride review' footer={footer}>
                    <ListGroup fill>
                        <ListGroupItem style={{height:'90px',paddingTop:'30px'}}>
                            <b style={{fontSize:'20px'}}>2016-10-01 11:00</b>
                            <span style={{paddingTop:'6px'}} class='pull-right'>(Home to Alameda)</span>
                        </ListGroupItem>
                    </ListGroup>
                </Panel>
                <Panel header={'Person'}>
                    <Row>
                        <Col xs={4}>
                            <Image width='100%' src="http://heartlandpreciousmetals.com/wp-content/uploads/2014/06/person-placeholder.jpg?33da63" circle />
                        </Col>
                        <Col xs={8}>
                            <h2 style={{marginTop:'4px'}}>João Leite</h2>
                            <h4>ist177907</h4>
                            <p>It is driver</p>
                        </Col>
                        <br />
                        <Col md={12}>
                        <Gmaps
                            width={'100%'}
                            height={'100%'}
                            style={{height:'400px'}}
                            lat={38.7436056}
                            lng={-9.2302441}
                            zoom={12}
                            loadingMessage={'Be happy'}
                            params={{v: '3.exp', key: 'AIzaSyCKeg1HrvU_UC8v81zZdiH8nxGgpUbT7OE'}}
                            onMapCreated={this.onMapCreated}>
                            <InfoWindow
                                lat={38.7436056}
                                lng={-9.2502441}
                                content={'Person location'}
                                onCloseClick={this.onCloseClick} />
                            <Marker lat={38.7336056} lng={-9.2502441} />
                        </Gmaps>
                        </Col>
                    </Row>
                </Panel>
                <br /> <br />
                </Col>
                <Col md={6}>
                    <Panel header={'Chat'}>
                        ...
                    </Panel>
                </Col>
            </Row>
        </div>
    }
}
