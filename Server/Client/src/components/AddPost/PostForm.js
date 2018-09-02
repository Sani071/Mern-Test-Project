import React, { Component } from 'react'

export default class PostForm extends Component {
     state={
       user_name: " ",
       post:" "
     }
  onChanged = (e)=>{
    this.setState({
    [e.target.name]:e.target.value
    })
  
  }
  handleSubmit=()=>{

    let post={
      user_name:this.state.user_name,
      post:this.state.post
    }

   this.props.newPostHandler(post)

  }
  render() {
    return (
      <div>
              <form onSubmit={this.handleSubmit}>
            <input 
             type='text' 
             name="user_name"
             value={this.state.user_name} 
             onChange={this.onChanged}/>
            <input   
            type='text' 
            name="post"
            value={this.state.post} 
            onChange={this.onChanged}/>
            <input type="submit" value="Submit"/>
          </form>
      </div>
    )
  }
}
