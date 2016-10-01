

import React, {Component} from 'react'
import { Col, Glyphicon } from 'react-bootstrap';

export default class Next extends Component {
    render() {
        return <div>
            <Col xs={1}>
                <h3 style={{marginTop:'30px'}}><Glyphicon glyph="chevron-right" /></h3>
            </Col>
        </div>
    }
}
