import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import Game from './Game';

function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppNavigation;