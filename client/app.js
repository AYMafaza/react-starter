import React from 'react';
import Router from 'react-router';
import { Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './pages/Login.js';
import WorkspaceHandler from './pages/Workspace.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
        <Link to="workspace">Workspace</Link>
        <p>Hello1</p>
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="workspace" path="/workspace" handler={WorkspaceHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
