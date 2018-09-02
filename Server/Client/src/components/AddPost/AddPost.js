import React, { Component } from 'react'
import "./addPost.css"
import PostForm from './PostForm';
export default class AddPost extends Component {
  state={
    isPost : false,
    newPost:false
  }


  postShowHandler = ()=>{
    this.setState({
      isPost:true
    })
  }
  newPostHandler = ()=>{
    this.setState({
      newPost:true
    })
    console.log("jnjdfn")
  }
    postShowHandlerFalse= () => {
      this.setState({
        isPost: false,
        newPost:false
      })
    }
  render() {
    let post = null
    if(this.state.isPost){
      post=<PostForm
      newPostHandler = {this.props.newPostHandler}
      postShowHandlerFalse = {this.postShowHandlerFalse}
      /> 
    }else{
      post =  
      <div>
        <button 
        className="btn btn-primary  px-2"
       onClick={this.postShowHandler}
      >ADD POST</button>
  <button 
  onClick={this.newPostHandler}
  className="btn btn-warning mx-1">ADD NEW POST</button>
      </div>
      
    }
    return (
 <div className="mb-3 text-center mt-1">{post}</div>
    )
  }
}
