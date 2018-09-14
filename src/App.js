import React from 'react'
import { Router } from 'react-static'
import { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

import Layout from './components/layout'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <Router>
    <Layout>
      <Routes />
    </Layout>
  </Router>
)

export default hot(module)(App)
