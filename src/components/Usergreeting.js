import React, { Component } from 'react'

 class Usergreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogin: false
      }
    }
    
    // LogedIn(){
    //     this.setState({
    //         isLogin: true
    //     })
    // }

  render() {
    
         return(this.state.isLogin?
            <div>Welcome Rida</div>:
            <div>Welcome Guest</div>
         )
    
    // let message
    // if(this.state.isLogin){
    //     message=<div>Welcome Rida !!</div>
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    // }

    // return(<div>{message}</div>)
    // if(!this.state.isLogin){
    //      return(
    //     <div>
    //          <div>Welcome guest</div>
    //          <button onClick={()=>this.LogedIn}>Login</button>
    //     </div>
    //    )
    
    // }
    // else{
       
    //     return(<div>Welcome Rida</div>)
    // }
    
  }
}

export default Usergreeting
