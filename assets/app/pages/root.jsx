'use strict'

import React from 'react'
import CuiPageInput from './input.jsx'


export default class CuiPageRoot extends React.Component {
  constructor (props) {
    super(props)

    this.goPrevPage = this.goPrevPage.bind(this)
    this.goNextPage = this.goNextPage.bind(this)
  }

  goNextPage () {
    console.log('next')
  }

  goPrevPage () {
    console.log('prev')
  }

  render () {
    return (
      <div className='cui-main-content'>
        <button className='cui-page-button cui-page-button--prev' onClick={this.goPrevPage}>Prev</button>
        <div className='cui-pages'>
          <CuiPageInput className='cui-page--1' />
          <CuiPageInput className='cui-page--2' />
          <CuiPageInput className='cui-page--3' />
        </div>
        <button className='cui-page-button cui-page-button--next' onClick={this.goNextPage}>Next</button>
      </div>
    )
  }
}
