import React, { Component } from 'react';


class ShowPost extends Component {
  state = {
    title: '',
    name: '',
    blog: ''
  }

  componentWillMount(){
    const {id} = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`
    fetch(URL)
    .then(response =>{
        return response.json()
      }).then(resp => {
        this.setState({
          title: resp.title,
          name: resp.name,
          author: resp.author,
          blog: resp.blog
        })
      })
    }

  render() {
    return(
      <div className="results-wrap">
        <div className="results">
          <p>Title: </p>
          <p>{this.state.title}</p>
        </div>
        <div className="results">
          <p>Blog: </p>
          <p>{this.state.blog}</p>
        </div>
        <div className="results">
          <p>Author: </p>
          <p>{this.state.author}</p>
        </div>
      </div>
    )
  }
}

export default ShowPost