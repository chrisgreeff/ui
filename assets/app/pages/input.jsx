'use strict'

import React from 'react'

export default class CuiPageInput extends React.Component {
  render () {
    const { className } = this.props

    return (
      <div className={`cui-page ${className || ''}`}>
        Inputs yo!
      </div>
    )
  }
}
