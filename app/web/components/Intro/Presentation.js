
import React, {Component} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

import { Jumbotron } from 'react-bootstrap'

export default class Intro extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="intro">
          <h1>Welcome to <span>IST Rider</span></h1>
          <p>
            We are a rides app that focuses on serving students from the
            IST community, mainly because of the benefits that the fenix API gives us
          </p>
          <p>
            We are going to help you find a ride to either the Alameda or the Tagus Park campus
            by suggesting other people that have similar daily routines.
          </p>
          <div class="center-block" style={{textAlign: "center"}}>
              <a href="/auth/fenix">
                <Button bsStyle="primary" bsSize="large" className="intro-button">Getting started</Button>
            </a>
          </div>
        </Jumbotron>
      </div>
    )
  }
}
