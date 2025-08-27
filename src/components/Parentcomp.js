import React, { Component } from 'react'
import Childcomp from './Childcomp'
class Parentcomp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }

      this.greetparent=this.greetparent.bind(this)

    }
    
greetparent(){
    alert(`hello ${this.state.parentName}`)

    
}
  render() {
    return (
      <div>
        <Childcomp greetHandler={this.greetparent} />
      </div>
    )
  }
}

export default Parentcomp
