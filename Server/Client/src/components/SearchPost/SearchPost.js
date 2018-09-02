import React, { Component } from 'react'
import axios from 'axios'
export default class SearchPost extends Component {
    state={
        name:""
    }
    onSearch=(e)=>{
      this.setState({
        name:e.target.value
      })
    }
    onSubmitHandler=()=>{
let name = this.state.name
let url = "http://localhost:4000/user/find"
 axios.get(url+"/"+name )
       .then(res=>{
         console.log(res.data)
       })
    }
  render() {
    return (
      <div className="my-1">
      <form onSubmit={this.onSubmitHandler}>
          <input
        onChange={this.onSearch.bind(this)}
        value={this.state.name}
        placeholder="search post by name" 
        type="text" />
        <input type="submit" value="Search"/>
      </form>
      </div>
    )
  }
}
