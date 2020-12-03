import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rules from './Rules';
import Login from './Login';
import Board from './Board';

function AppContainer() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/board'>
          <Board />
        </Route>
        <Route path='/rules'>
          <Rules />
        </Route>
        <Route path='/'>
          <Rules />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppContainer;