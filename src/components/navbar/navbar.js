import React from 'react';
import { Link } from 'react-static'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import styled from 'styled-components';

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
      <Navbar color="primary" dark expand="md">
        <div className="container">
          <Link className="navbar-brand" to="/">My site</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto d-md-none" navbar>
              <Link className="nav-item" onClick={this.toggle} to="/blog/">
                  <span className="nav-link py-0">Blog</span>
              </Link>
              <Link className="nav-item" onClick={this.toggle} to="/about/">
                  <span className="nav-link py-0">About</span>
              </Link>
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
        </div>
      </Navbar>
    );
  }
}
