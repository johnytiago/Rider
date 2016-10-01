
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { Row, Panel, Col, Grid, ListGroup, ListGroupItem, FormGroup,ControlLabel,FormControl } from 'react-bootstrap'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

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
            matches : ''
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
            matches : ''
        })
        let matches =   <div>
            <ListGroupItem href="#">
                <b>João Leite</b>
                <span class='pull-right'>10 km</span>
            </ListGroupItem>
            <ListGroupItem href="#">
                <b>João Leite</b>
                <span class='pull-right'>10 km</span>
            </ListGroupItem>
            <ListGroupItem href="#">
                <b>João Leite</b>
                <span class='pull-right'>10 km</span>
            </ListGroupItem>
            <ListGroupItem href="#">
                <b>João Leite</b>
                <span class='pull-right'>10 km</span>
            </ListGroupItem>
        </div>
        this.setState({
            matches : matches
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

            <Marker
              lat={38.7046056}
              lng={-9.2302441}
              draggable={false}
              onDragEnd={this.onDragEnd} />

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
