import React, { Component } from 'react'
   
 class Fruits extends Component {
    constructor(props) {
      super(props)
   
      this.state = {
          fruits: ['Apple','Banana','Grapes','Mango','Guava']
      }
    }
    
    // deleteHandle=(index)=>{
    //     const newFruits=this.state.fruits.filter((_,i)=> i!==index);
    //     this.setState({
    //       fruits: newFruits
    //     })
    // }
 
    render() {
    
   
    return (
        <div>
       <div>
       {
        this.state.fruits.map((fruit,index)=>{
        <div><button>{fruit}</button>
      <h2>{fruit}</h2>
      </div>
      })
       } 
      </div>
      
      </div>
      
    )
  }
} 




export default Fruits
