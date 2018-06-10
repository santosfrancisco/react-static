import React from 'react'
import {
  CardDeck,
} from 'reactstrap'

import PostCard from './post-card'

const PostList = ({ posts }) => (
  <CardDeck>
    {posts.map(post => (
      <PostCard key={post.data.slug} post={post} />
    ))}
  </CardDeck>
)

export default PostList