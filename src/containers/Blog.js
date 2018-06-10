
import React from 'react'
import { withRouteData } from 'react-static'
//
import PostList from '../components/post-list'

export default withRouteData(({ posts }) => (
  <div style={{paddingTop: '1rem'}}>
    <h1>It's blog time.</h1>
    <br />
    <PostList posts={posts} />
  </div>
))
