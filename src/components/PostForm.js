import React, { Component } from 'react'
import axios from 'axios'

 class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }
 
    inputHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
       
    }
    
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts').
        then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        });
        

    }
  render() {
     const {userId,title,body}=this.state
    return (
      <div>
        <h2>Post request Form </h2>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>User Id: </label>
                <input type='text' name='userId' value={userId} onChange={this.inputHandler}></input>
            </div>
            <br></br>
            <div>
                <label>Title of post: </label>
                <input type='text' name='title' value={title} onChange={this.inputHandler}></input>
            </div>
            <br></br>
            <div>
                <label>Body: </label>
                <textarea type='text' name='body' value={body} onChange={this.inputHandler}></textarea>
            </div>
            <br></br>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default PostForm
