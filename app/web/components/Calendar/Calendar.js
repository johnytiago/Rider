
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import { fetchDay } from '../../../actions/calendar'
import { addTmpRide } from '../../../actions/rides'

import Navigation from '../Navigation/Navigation'
import Schedule from './Schedule'
import List from './List'
import Day from './Day'

@connect((store)=>{
    return {
        calendar : store.calendar.calendar,
        tmp : store.rides.tmp,
        error : store.calendar.error
    }
})
export default class Calendar extends Component {

    constructor(){
        super()
        this.state = {
            hours : []
        }
    }
    today(days){
        let today = new Date()
        var date = new Date(today.setTime( today.getTime() + days * 86400000 ));
        let dd = date.getDate();
        if(Math.floor(dd/10)==0){ dd = '0'+dd; }
        let mm = date.getMonth() + 1;
        if(Math.floor(mm/10)==0){ mm = '0'+mm; }
        let yy = date.getFullYear();
        return yy+'-'+mm+'-'+dd;
    }
    addHour(h){
        let hours = this.state.hours
        hours.push(h)
        this.setState({
            hours
        })
        this.props.dispatch(addTmpRide(h))
    }
    removeHour(h){
        let hours = this.state.hours
        hours.splice(hours.indexOf(h), 1)
        this.setState({
            hours
        })
    }
    componentWillMount(){
        this.props.dispatch(fetchDay('me',this.today(0)))
        this.props.dispatch(fetchDay('me',this.today(1)))
        this.props.dispatch(fetchDay('me',this.today(2)))
        this.props.dispatch(fetchDay('me',this.today(3)))
    }
    render() {
        this.state.hours = this.props.tmp
        let events = this.props.calendar
        return <div>
            <Navigation state='calendar' />
            <Row>
                <Col md={3}> <List hours={this.state.hours} /> </Col>
                <Col md={9}> <Schedule addHour={this.addHour.bind(this)} removeHour={this.removeHour.bind(this)} events={events} /> </Col>
            </Row>
        </div>
    }
}
