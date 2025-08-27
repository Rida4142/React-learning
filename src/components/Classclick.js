import React, { Component } from 'react'

class Classclick extends Component {

  clicked(){
    console.log('yes you clicled again ')
  }
  render() {
    return (
      <div>
        <button onClick={this.clicked}>Now click</button>
      </div>
    )
  }
}

export default Classclick
