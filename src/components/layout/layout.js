import React, { Component } from 'react'
import { SiteData } from 'react-static'
import styled from 'styled-components'
import { Container } from 'reactstrap'

import Navbar from '../navbar'

class Layout extends Component {
  render () {
    const { className, children } = this.props
    return (
      <SiteData className={className}>
        {({ title, metaDescription }) => (
          <React.Fragment>
            <Navbar navBrand={title} />
            <Container className='content'>
              {children}
            </Container>
          </React.Fragment>
        )}
      </SiteData>

    )
  }
}

export default styled(Layout)`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  .content {
    padding: 1rem;
  }

  img {
    max-width: 100%;
  }
`
