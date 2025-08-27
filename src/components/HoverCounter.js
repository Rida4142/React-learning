import React, { Component } from 'react'

 class HoverCounter extends Component {
    
  render() {
    const {count,countIncrement}=this.props
    return (
     <h2 onMouseOver={countIncrement}>Hover {count} times</h2>
    )
  }
}

export default HoverCounter
