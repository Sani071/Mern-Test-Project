import React, { Component } from 'react'
import Post from "../Post/Post"
export default class ShowPost extends Component {
  render() {
   // console.log(this.props.post)
    return (
      < div className = "mb-4 ">
      {this.props.post.map((p,i)=>{
        return <Post
      likeController={this.props.likeController}
      commentController = {this.props.commentController}
      deletePostHandler = {this.props.deletePostHandler}
        key={i}
        post={p}
        />
      })}
      </div>
    )
  }
}
