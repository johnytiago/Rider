
import React, {Component} from 'react'
import { Button } from 'react-bootstrap';

export default class Intro extends Component {
    render() {
        return <div>
            <Header />
            <Button bsStyle="primary" bsSize="large">Get Started!</Button>
        </div>
    }
}
