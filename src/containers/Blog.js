
import React from 'react'
import { withRouteData } from 'react-static'
//
import PostList from '../components/post-list'

export default withRouteData(({ posts, ...props }) => (
  <div>
    <h1>It's blog time..</h1>
    <br />
    <PostList posts={posts} {...props} />
  </div>
))
