import React from 'react'
import { Link } from 'react-static'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap'
// import styled from 'styled-components'
import config from '../../../config'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render () {
    const {
      navBrandText = '',
      menu = []
    } = config
    return (
      <Navbar color="secondary" dark expand="md">
        <div className="container">
          <Link className="navbar-brand" to="/">{navBrandText}</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto d-md-none" navbar>
              {menu.map(option => (
                <Link className="nav-item" key={option.text} onClick={this.toggle} to={option.route}>
                  <span className="nav-link py-0">{option.text}</span>
                </Link>
              ))}
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
    )
  }
}
