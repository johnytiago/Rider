

import React, {Component} from 'react'
import { Breadcrumb, Grid, Row } from 'react-bootstrap';

import Step from './Step'
import Next from './Next'

export default class Navigation extends Component {
    render() {

        let active = {}
        active[this.props.state]=true

        return <div>
            <Breadcrumb>
                <Grid>
                     <Row className="show-grid">
                        <Step active={active.calendar} title="Calendar" description="Bla bla bla" />
                        <Next />
                        <Step active={active.map} title="Map" description="Bla bla bla" />
                        <Next />
                        <Step active={active.person} title="Person" description="Bla bla bla" />
                     </Row>
                </Grid>
            </Breadcrumb>
        </div>
    }
}
