import React, { Component } from 'react'

 class Toggle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         toggle: 'OFF'
      }
    }
    
    toggleHandle=()=>{
        if(this.state.toggle==='ON'){
         this.setState({
            toggle: 'OFF'
        })
        }
        if(this.state.toggle==='OFF'){
            this.setState({
                toggle: 'ON'
        
            })
        }
    }
  render() {
    return (
      <div>
        <button onClick={this.toggleHandle}>{this.state.toggle}</button>
      </div>
    )
  }
}

export default Toggle
