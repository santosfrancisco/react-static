
import React from 'react'
import { withRouteData, Link } from 'react-static'
//
import PostList from '../components/post-list'

export default withRouteData(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    <PostList posts={posts} />
    {/* <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul> */}
  </div>
))
