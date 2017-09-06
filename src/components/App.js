import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import BaseLayout from './BaseLayout';
import CreatePost from './CreatePost';
import PostList from './PostList';
import ShowPost from './ShowPost';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/show-post/:id" component={ShowPost} />
          </Switch>
        </BaseLayout>
      </Router>
    );
  }
}

export default App;
