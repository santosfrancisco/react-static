import React from 'react';
import { Link } from 'react-static'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <Link className="nav-link" to="/">My site</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto d-md-none" navbar>
              <NavItem>
                <Link className="nav-link" onClick={this.toggle} to="/blog/">Blog</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" onClick={this.toggle} to="/about/">About</Link>
              </NavItem>
            </Nav>
            <Nav className="ml-auto d-none d-md-flex" navbar>
              <NavItem>
                <Link className="nav-link" to="/blog/">Blog</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about/">About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}