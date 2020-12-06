import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rules from './Rules';
import About from './About';
import Login from './Login';
import Board from './Board';

function AppContainer(props) {
  const { players } = { ...props };

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login players={players} />
        </Route>
        <Route path='/board'>
          <Board />
        </Route>
        <Route path='/rules'>
          <Rules />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/'>
          <Rules />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppContainer;
