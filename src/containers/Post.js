import React from 'react'
import styled from 'styled-components'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//

export default styled(withRouteData(({ className, post }) => (
  <div className={className}>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.data.title}</h3>
    <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
    <img className="image" src={post.data.thumbnail} alt="" />
    <Markdown source={post.content} escapeHtml={false} />
  </div>
)))`
  display: flex;
  flex-direction: column;
`
