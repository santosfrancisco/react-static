import React from 'react'
import { CardDeck } from 'reactstrap'

import PostCard from './post-card'
import Pagination from './pagination'

class PostList extends React.Component {
  constructor (props) {
    super()
    let search = ''
    let params = undefined
    if(typeof window != "undefined"){
      search = window.location.search
      params = new URLSearchParams(search)
    }

    const currentPage = (params && params.get('page')) ? parseInt(params.get('page')) : 1

    this.state = {
      items: props.posts,
      currentPage,
      pageOfItems: [],
    }

    this.onChangePage = this.onChangePage.bind(this)
  }
  onChangePage (pageOfItems, page) {
    this.setState({ pageOfItems })
    this.props.history.push(`/blog?page=${page}`)
}
  render () {
    const { items, currentPage, pageOfItems } = this.state
    return (
      <React.Fragment>
        <CardDeck>
          {pageOfItems.map(post => (
            <PostCard key={post.data.slug} post={post} />
          ))}
        </CardDeck>
        <div className="pagination__wrapper">
          <Pagination items={items} initialPage={currentPage} onChangePage={this.onChangePage} />
        </div>
      </React.Fragment>
    )
  }
}

export default PostList
