
import React, {Component} from 'react'
import { Navbar, NavItem, Nav } from 'react-bootstrap';

import { connect } from 'react-redux'

@connect((store)=>{
  return {
    tecnicoID : store.user.user.tecnicoID,
  }
})
export default class Header extends Component {
    render() {
        return <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><b>IST Rider</b></a>
                    </Navbar.Brand>
                </Navbar.Header>
		<Nav pullRight>
			<NavItem eventKey={1} href="">Hello, {this.props.tecnicoID || "New user"}</NavItem>
		</Nav>
            </Navbar>
        </div>
    }
}
/*
<Nav pullRight>
    <NavItem eventKey={1} href="/">Getting started</NavItem>
    <NavItem eventKey={2} href="/team">Team</NavItem>
    <NavItem eventKey={3} href="/about">About</NavItem>
</Nav>
*/
