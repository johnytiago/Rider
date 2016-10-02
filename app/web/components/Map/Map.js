
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Row, Panel, Col, Grid, ListGroup, ListGroupItem, FormGroup,ControlLabel,FormControl } from 'react-bootstrap'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import { Link } from 'react-router'

import Navigation from '../Navigation/Navigation'

@connect((store)=>{
    return {
        tmp : store.rides.tmp,
    }
})
export default class Map extends Component {

    constructor(){
        super()
        this.state = {
            matches : '',
            marks : []
        }
    }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

    handdleChange(e){
        this.setState({
            matches : '',
            marks : []
        })
        let matches =   <div>
            <Link to='person'><ListGroupItem href="#">
                <b>João Leite</b>
                <span class='pull-right'>6 km</span>
            </ListGroupItem></Link>
            <ListGroupItem href="#">
                <b>António Freire</b>
                <span class='pull-right'>11 km</span>
            </ListGroupItem>
            <ListGroupItem href="#">
                <b>João Tomázio</b>
                <span class='pull-right'>20 km</span>
            </ListGroupItem>
            <ListGroupItem href="#">
                <b>João Tiago</b>
                <span class='pull-right'>22 km</span>
            </ListGroupItem>
        </div>
        this.setState({
            matches : matches,
            marks: [
                {lat:38.7594863, lng:-9.2665753},
                {lat:38.7194863, lng:-9.2965753},
                {lat:38.7594863, lng:-9.2165753},
                {lat:38.6594863, lng:-9.1565753}
            ]
        })
  }

  render() {

      let rides = this.props.tmp.map(d => <option value={{d}}>{d}</option>)
      let ridesHTML =  <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select ride</ControlLabel>
      <FormControl componentClass="select" onChange={this.handdleChange.bind(this)}>
            <option value='...'>(select hour)</option>
            {rides}
      </FormControl>
    </FormGroup>

    let marks = this.state.marks.map(m => <Marker lat={m.lat} lng={m.lng} />)
    return <div>

        <Gmaps
            width={'100%'}
            height={'100%'}
            style={{height:'calc(100% - 52px)',position:'absolute',zIndex:1}}
            lat={38.7436056}
            lng={-9.2302441}
            zoom={12}
            loadingMessage={'Be happy'}
            params={{v: '3.exp', key: 'AIzaSyCKeg1HrvU_UC8v81zZdiH8nxGgpUbT7OE'}}
            onMapCreated={this.onMapCreated}>

            <InfoWindow
                lat={38.7436056}
                lng={-9.2502441}
                content={'You are here!'}
                onCloseClick={this.onCloseClick} />
            <Marker lat={38.7336056} lng={-9.2502441} />

                {marks}

        </Gmaps>
        <div style={{marginTop:'0px',paddingTop:'20px',zIndex:999,position:'relative'}}>
            <Grid>
                <Navigation state='map' />
            </Grid>
        </div>
        <div class='matches'>
        <Row>
        <Col md={12}>
        <Panel collapsible defaultExpanded header={ridesHTML} bsStyle="primary">
        <ListGroup fill children={this.state.matches}></ListGroup>
        </Panel>
        </Col>
        </Row>
        </div>
    </div>
  }

}
