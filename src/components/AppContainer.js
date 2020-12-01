import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Game from './Game';
import Hand from './Hand';
import Rules from './Rules';
import Login from './Login';

function AppContainer() {
  return (
    <Router>
      <Switch>
        <Route path='/game'>
          <Grid item xs={12}>
            <Game />
          </Grid>
        </Route>
        <Route path='/rules'>
          <Grid item xs={12}>
            <Rules />
          </Grid>
        </Route>
        <Route path='/login'>
          <Grid item xs={12}>
            <Login />
          </Grid>
        </Route>
        {/* <Route path='/signin'>
          <Grid item xs={12}>
            <Signin />
          </Grid>
        </Route> */}
        <Route path='/hand'>
          <Hand />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppContainer;