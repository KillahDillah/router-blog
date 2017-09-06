import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class PostList extends Component {
  state = {
    posts: []
  }

  componentWillMount(){
    fetch(`https://tiny-lasagna-server.herokuapp.com/collections/blogger/`)
    .then (response => {
      return response.json()
    })
    .then(data =>{
      console.log (data)
      this.setState({
        posts: data
      })
    })
  }

  render() {
    return(
      <div className="results-wrap"> 
          {this.state.posts.map(function(post){
            return <div key={post._id} className="result">
              <Link to={'/show-post/'+ post._id}>{post.title}</Link>
              </div>
          })}
      </div>
    )
  }
}

export default PostList