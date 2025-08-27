import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome'
      }

     this.clickhandle= this.clickhandle.bind(this)
    }

    clickhandle(){
        this.setState({
            message: 'Goodbye'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickhandle}>click</button>
      </div>
    )
  }
}

export default EventBind
