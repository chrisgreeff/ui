'use strict'

import React from 'react'
import CuiPageInputBasic from './basic.jsx'

export default class CuiPageInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      top: 0,
      currentPage: 1,
      pages: 3
    }

    this.goPrevSubPage = this.goPrevSubPage.bind(this)
    this.goNextSubPage = this.goNextSubPage.bind(this)
  }

  goNextSubPage () {
    const { top, currentPage } = this.state

    this.setState({ top: top - 100, currentPage: currentPage + 1 })
  }

  goPrevSubPage () {
    const { top, currentPage } = this.state

    this.setState({ top: top + 100, currentPage: currentPage - 1 })
  }

  render () {
    const { top, currentPage, pages } = this.state
    const { className } = this.props

    return (
      <div className={`cui-page ${className || ''}`}>
        <button className='cui-page-button cui-page-button--prev-sub'
          onClick={this.goPrevSubPage}
          disabled={currentPage === 1}>
          <i className="fa fa-chevron-up" />
        </button>
        <div className='cui-sub-pages' style={{top: `${top}vh`}}>
          <CuiPageInputBasic className='cui-sub-page--1' />
          <CuiPageInputBasic className='cui-sub-page--2' />
        </div>
        <button className='cui-page-button cui-page-button--next-sub'
          onClick={this.goNextSubPage}
          disabled={currentPage === pages}>
          <i className="fa fa-chevron-down" />
        </button>
      </div>
    )
  }
}
