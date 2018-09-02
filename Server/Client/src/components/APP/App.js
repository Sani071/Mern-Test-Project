import React, { Component } from 'react';
import axios from "axios"
import './App.css';
import  AddPost from "../AddPost/AddPost"
import ShowPost from '../ShowPost/PostShow/ShowPost'
import SearchPost from "../SearchPost/SearchPost"

class App extends Component {
state={
  post:[]
}
 newPostHandler = (postData)=>{
   let postUrl = "http://localhost:4000/user/addpost"
   axios.post(postUrl,postData)
   .then(res =>{
          this.setState({
            post:[...res.data.post]
          })
   })
   .catch(err=>console.log(err))
 }
 constructor(props) {
   super(props)
        axios.get("http://localhost:4000/user/view/")
      .then((res)=>{
        this.setState({
          post:[...res.data.Allpost]
        })
      })
      .catch(err=>console.log(err))
 }
 likeController=(id,name)=>{

        let likeUrl = "http://localhost:4000/user/like"

       axios.patch(likeUrl + "/" + id, {
           like: name
         })
         .then(res => {
         
         })
         .catch(err => console.log(err))
 }
 commentController = (id,cmnt)=>{
      let cmntUrl = "http://localhost:4000/user/comment"
      axios.patch(cmntUrl + "/" +id, {
          cmnt
        })
        .then(res => {
           this.setState({
             ...this.state,
             post:[...res.data.cmnt]
           })
        })
        .catch(err => console.log(err))
       
 }
 deletePostHandler=(id)=>{
    let deleteUrl = "http://localhost:4000/user/delete"
          axios.delete(deleteUrl + "/"+id)
          .then(res=>{
          })
          .catch(err=>console.log(err))
 }
  render() {
     //console.log(this.state.post);
    return (
      <div className="App container">
       <AddPost 
       newPostHandler={this.newPostHandler}
       />
       <button
       onClick = {this.newPostHandler}
        className="btn btn-success">Post</button>
       <h2>Total post:{this.state.post.length}
       </h2>
       <SearchPost/>
      <ShowPost
          likeController = {this.likeController}
          commentController = {this.commentController}
          deletePostHandler = {this.deletePostHandler}
            post={this.state.post} 
      />
      </div>
    );
  }
}

export default App;
