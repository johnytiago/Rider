
import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

import { Jumbotron } from 'react-bootstrap'

export default class Intro extends Component {
    render() {
        return <div>
            <Jumbotron>
                <h1>IST Rider</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <p>
                    <Link to='calendar'>
                        <Button bsStyle="primary">Getting started</Button>
                    </Link>
                </p>
             </Jumbotron>
        </div>
    }
}
