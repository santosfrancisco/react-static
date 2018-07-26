import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styled from 'styled-components'

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
}

const defaultProps = {
  initialPage: 1,
  pageSize: 9,
}

class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.state = { pager: {} }
  }

  componentWillMount () {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage)
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage)
    }
  }

  setPage (page) {
    const { items, pageSize } = this.props
    let pager = this.state.pager

    if (page < 1 || page > pager.totalPages) {
      return
    }

    pager = this.getPager(items.length, page, pageSize)

    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1)

    this.setState({ pager })
    this.props.onChangePage(pageOfItems, page)
  }

  getPager (totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1

    pageSize = pageSize || 2

    const totalPages = Math.ceil(totalItems / pageSize)

    if (currentPage > totalPages) currentPage = 1

    let startPage
    let endPage
    if (totalPages <= 3) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 3) {
        startPage = 1
        endPage = 3
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2
        endPage = totalPages
      } else {
        startPage = currentPage - 1
        endPage = currentPage + 1
      }
    }

    const startIndex = (currentPage - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i)

    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    }
  }

  render () {
    const pager = this.state.pager
    if (!pager.pages || pager.pages.length <= 1) {
      return null
    }
    return (
      <div className={this.props.className}>
        <ul className="pagination">
          <li className={classnames('page-item', pager.currentPage === 1 ? 'disabled' : '')}>
            <a className="page-link" onClick={() => this.setPage(1)}>&laquo;</a>
          </li>
          <li className={classnames('page-item', pager.currentPage === 1 ? 'disabled' : '')}>
            <a className="page-link" onClick={() => this.setPage(pager.currentPage - 1)}>&lsaquo;</a>
          </li>
          {pager.pages.map((page, index) =>
            (<li key={index} className={classnames('page-item', pager.currentPage === page ? 'active' : '')}>
              <a className="page-link" onClick={() => this.setPage(page)}>{page}</a>
            </li>)
          )}
          <li className={classnames('page-item', pager.currentPage === pager.totalPages ? 'disabled' : '')}>
            <a className="page-link" onClick={() => this.setPage(pager.currentPage + 1)}>&rsaquo;</a>
          </li>
          <li className={classnames('page-item', pager.currentPage === pager.totalPages ? 'disabled' : '')}>
            <a className="page-link" onClick={() => this.setPage(pager.totalPages)}>&raquo;</a>
          </li>
        </ul>
      </div>
    )
  }
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps

export default styled(Pagination)`
  text-align: center;
  .pagination {
    display: inline-flex;
  }
`
