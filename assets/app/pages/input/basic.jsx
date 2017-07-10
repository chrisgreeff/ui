'use strict'

import React from 'react'

export default class CuiPageInputBasic extends React.Component {
  render () {
    const { className } = this.props

    return (
      <div className={`cui-sub-page ${className || ''}`}>
        Basic Input
      </div>
    )
  }
}
