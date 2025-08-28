import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: {

         },
         errorMsg: ''
      }
    }
    componentDidMount(){
        axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(response=>{
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                 errorMsg: 'Error while retrieving...'
            })
           
        })
    }
  render() {
    const {posts,errorMsg}=this.state
    console.log(posts)
    return (
      <div>
        <h2>Random jokes</h2>
        <p>Note:"Refersh to get new everytime"</p><hr></hr>
       
     
      <div>{posts.setup}</div>
      <br></br>
      <p>{posts.punchline}</p>
    
      
      {
        errorMsg.length ? <div>{errorMsg}</div>:
        null
      }
      </div>
    )
  }
}

export default PostList
