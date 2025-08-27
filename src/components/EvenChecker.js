import React, { Component } from 'react'

 class EvenChecker extends Component {

    constructor(props) {
      super(props)
      this.inputref=React.createRef()
      this.state={
        message: ''
      }

    }
    
   checkEven=()=>{
    let value=this.inputref.current.value;
    console.log(value)
    if(value%2==0)
        this.setState({
            message: 'the number is Even'
        })
    else
         this.setState({
            message: 'the number is Odd'
        })

    
   }

  render() {
    return (
      <div>
        <p>Enter a number to check wheather its even or not?</p>
        <input type='text' ref={this.inputref}></input>
         <button onClick={this.checkEven}>Check</button>
         <h4>{this.state.message}</h4>
         <p>Note:Refresh to check again</p>
      </div>
    )
  }
}

export default EvenChecker
