import React, { Component } from 'react'
import "./post.css"
import axios from 'axios';
export default class post extends Component {
  state={
    isComment:false,
    // likeCount :this.props.post.like.length,
    // commentCount:this.props.post.cmnt.length
  }
   deletePostHandler=()=>{
this.props.deletePostHandler(this.props.post._id)
   }
   commentHandler=()=>{
     this.setState({
       isComment:true
     })
   }
     likeHitHandler = () => {
      this.props.likeController(this.props.post._id,this.props.post.user_name)
     }

   onCommentChange = (event)=>{
     let comment = event.target.value
  if (event.key == 'Enter') {
           this.props.commentController(this.props.post._id,comment)
             this.setState({
      isComment : false
    })
    event.target.value = ''
  }
   }

   
  render() {
let comment = null
if(this.state.isComment){
  comment = <div >
    <input 
    onKeyPress={this.onCommentChange}
    placeholder="Write your comment and hit Enter" className="w-100 py-2 px-2 br-1" type="text"/></div>
}
//avatar
      let name = this.props.post.user_name
      let splitName = name.split("")
      let avatar = splitName[0].toUpperCase()

  


    return (
      <div>
        <div className="card hover-shadow bg-info py-2 br-2">
        <span
        onClick={this.deletePostHandler}
         className="close ml-auto">X</span>
        <div className="card-header">
        <div className="d-flex mb-0">   <div className="circle ">
              <span>{avatar}</span>
           </div>
           <a className="ml-1">{this.props.post.user_name.toUpperCase()
}</a></div>
           <span className="ml-5">{this.props.post.time}</span>
        </div>
        <div className="card-body">
        {this.props.post.post}
        </div>
        <div className="card-footer"></div>
        <div className="row">
          <div  className="col-4 ml-4">{this.props.post.like.length}</div>
          <div className="col-4">{this.props.post.cmnt.length}</div>
        </div>
        <div className="row">
          <div className="col-4 ml-4 "><h3>
            <i
            onClick={this.likeHitHandler}
             class="fa fa-thumbs-o-up pointer" aria-hidden="true"></i></h3></div>
          <div className="col-4 ">
          <h3><i
          onClick={this.commentHandler} 
          class="fa fa-comments-o pointer" aria-hidden="true"></i></h3>
          </div>
          <div className="col-3 ">
        <h4> <i class="fa fa-share-square-o pointer" aria-hidden="true"></i></h4>
        </div>
        </div>
        {comment}
        </div>
            <div className="bg-success text-center mt-0">
          {this.props.post.cmnt.map((cm,i)=>{
            return <div className="d-flex ml-2">
              <h3 className="circle">{avatar}</h3>
              <p className="mx-3 mt-1 bg-light w-50 py-2 px-2 br-2">{cm}</p>
            </div>
          })}
        </div>
         </div>
    )
  }
}
