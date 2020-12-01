import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Game from './Game';
import Hand from './Hand';
import Rules from './Rules';

function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route path='/game'>
          <Grid item xs={12}>
            <Game />
          </Grid>
        </Route>
        <Route path='/rules'>
          <Rules />
        </Route>
        <Route path='/hand'>
          <Hand />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppNavigation;