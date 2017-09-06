import React, { Component } from 'react';


class CreatePost extends Component {
  constructor (){
    super()
    this.state = {
      name: "",
      title: "",
      blog: ""
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleText=(e)=>{
    this.setState ({
      text: e.target.value
    })
  }

  handleBlog=(e)=>{
    this.setState ({
      blog: e.target.value
    })
  }

  submitForm=(e)=> {
    e.preventDefault()
    let URL=(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/`)
    fetch(URL, {
      method: "POST",
      body: {
        author: 'Killah-Dillah',
        name: this.state.name,
        text: this.state.text,
        blog: this.state.blog
      }
    })
    .then(response =>{
      return response.json()
    }).then(resp => {
      this.props.history.push('/')
    })
  }

  render() {
    return(
      <div className="post-wrap">
        <form onSubmit={this.submitForm}>
          <div className="post-form">
            <label htmlFor="name">Author's Name </label>
            <input type="text" onChange={this.handleName} placeholder="Enter your name or email..." />
          </div>
          <div className="post-form">
            <label htmlFor="title">Title</label>
            <input type="text" onChange={this.handleText} placeholder="Title" />
          </div>
          <div className="post-form">
            <label htmlFor="blog"> Write your blog... </label>
            <input type="textarea" onChange={this.handleBlog}/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreatePost 