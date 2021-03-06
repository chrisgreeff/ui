'use strict'

import React from 'react'
import CuiPageInput from './input/index.jsx'


export default class CuiPageRoot extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      left: 0,
      currentPage: 1,
      pages: 3
    }

    this.goPrevPage = this.goPrevPage.bind(this)
    this.goNextPage = this.goNextPage.bind(this)
  }

  goNextPage () {
    const { left, currentPage } = this.state

    this.setState({ left: left - 100, currentPage: currentPage + 1 })
  }

  goPrevPage () {
    const { left, currentPage } = this.state

    this.setState({ left: left + 100, currentPage: currentPage - 1 })
  }

  render () {
    const { left, currentPage, pages } = this.state

    return (
      <div className='cui-main-content'>
        <button className='cui-page-button cui-page-button--prev'
          onClick={this.goPrevPage}
          disabled={currentPage === 1}>
          <i className="fa fa-chevron-left" />
        </button>
        <div className='cui-pages' style={{left: `${left}vw`}}>
          <CuiPageInput className='cui-page--1' />
          <CuiPageInput className='cui-page--2' />
        </div>
        <button className='cui-page-button cui-page-button--next'
          onClick={this.goNextPage}
          disabled={currentPage === pages}>
          <i className="fa fa-chevron-right" />
        </button>
      </div>
    )
  }
}
