import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-static'
import styled from 'styled-components'
import {
  Col, Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody,
} from 'reactstrap'

const PostCard = styled(props => (
  <Col className={props.className} sm="12" md="6" lg="4">
    <Card>
      <Link to={`/blog/post/${props.post.data.slug}`} className="post-card-thumbnail__wrapper">
        <CardImg className="post-card-thumbnail" top width="100%" src={props.post.data.thumbnail} alt="Post featured image" />
        <span className="post-card-thumbnail__inner-text">Read post</span>
      </Link>
      <CardBody>
        <CardTitle className="post-card__title">{props.post.data.title}</CardTitle>
        <CardSubtitle>
          <Moment className="post-card__date" format="MMMM Do, YYYY">{props.post.data.date}</Moment>
        </CardSubtitle>
        <CardText className="post-card__excerpt">{`${props.post.content.slice(0, 200)}...`}</CardText>
        <Link className="post-card__read-more clearfix" to={`/blog/post/${props.post.data.slug}`}>Read more...</Link>
      </CardBody>
    </Card>
  </Col>
))`
  margin-bottom: 1.25rem !important;
  padding-right: 0;
  padding-left: 0;
  .post-card-thumbnail__wrapper {
    width: 100%;
    height: 300px;
    display: block;
    position: relative;
    overflow: hidden;
    border-radius: 3px;
  }
  .post-card-thumbnail__wrapper .post-card-thumbnail__inner-text {
    pointer-events: none;
    color: #fff;
    font-size: 1.5rem;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    transition: bottom .3s ease-in-out; 
    text-shadow: 1px 1px 9px rgba(150, 150, 150, 1);
  }
  .post-card-thumbnail__wrapper:hover .post-card-thumbnail__inner-text {
    bottom: 30%;
  }
  .post-card-thumbnail__wrapper:hover .post-card-thumbnail{
    -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
    filter: blur(5px);
  }
  .post-card-thumbnail{
    object-fit: cover;
    width: 100%;
    height: 300px;
    transition: all .3s ease-in-out; 
  }
  .post-card-thumbnail:hover {
    transform: scale(1.1);
  }
  .post-card__date {
    font-size: 0.8rem;
  }
  .post-card__excerpt {
    opacity: .8;
  }
  .post-card__read-more {
    float: right;
    text-align: right;
    width: 100%;
    opacity: 0.6;
    text-decoration: none;
    color: #424242;
    border-top: 1px solid #424242;
  }
  .post-card__read-more:hover {
    opacity: 1;
  }
`

export default PostCard