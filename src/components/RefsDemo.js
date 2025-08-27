import React, { Component } from 'react'

 class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
      this.inputref=React.createRef()
    }

    componentDidMount(){
        this.inputref.current.focus()
        console.log(this.inputref)
    }

    clickHandler=()=>{
        alert(`Hey ${this.inputref.current.value}`)
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputref}></input>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default RefsDemo
