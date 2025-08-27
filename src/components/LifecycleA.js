import React, { Component } from 'react'
// import LifeCycleA from './LifeCycleA'


 class LifecycleA extends Component {

     constructor(props) {
      super(props)
    
      this.state = {
         name: 'Rida'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA  componentDidMount')
    }
    
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        LifeCycle A
      </div>
    )
  }
}

export default LifecycleA
