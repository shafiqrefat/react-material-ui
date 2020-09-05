import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';
import PostDetail from './PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <PostDetail/>
        </Route>
        <Route path="/comment/:commentId">
          <PostDetail/>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
