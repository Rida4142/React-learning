import React, { Component } from 'react'
import ReactDOM from 'react-dom'

 class PortalDemo extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h2>This is portal Demo</h2>
      </div>
      ,document.getElementById('portal')
    )
  }
}

export default PortalDemo
