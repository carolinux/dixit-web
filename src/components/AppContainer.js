import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rules from './Rules';
import About from './About';
import Login from './Login';
import Board from './Board';

function AppContainer(props) {
  const { mainPlayer, updatePlayer } = { ...props };

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login updatePlayer={updatePlayer}/>
        </Route>
        <Route path='/board/:gid'>
          <Board/>
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
