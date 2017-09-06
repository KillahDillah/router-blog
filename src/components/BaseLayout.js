import React, { Component } from 'react';
import {BrowserRouter as route, Router, Switch, NavLink} from 'react-router-dom';
import CreatePost from './CreatePost';
import PostList from './PostList';
import ShowPost from './ShowPost';

class BaseLayout extends Component {
  render() {
    return(
      <div className="app-wrap">
        <nav>
          <div>
          <h2><a href="/">Blog-It</a></h2>
          </div>
          <div className="nav-wrap">
            <li className="navbar"><NavLink activeClassName="active" to="/create-post">Create Post</NavLink></li>
            <li className="navbar"><NavLink activeClassName="active" to="/">View All Posts</NavLink></li>
    
          </div>
        </nav>
        <div>
        {this.props.children}
        </div>
      </div>
    )
  }
}

export default BaseLayout