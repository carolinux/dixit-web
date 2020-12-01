import React from 'react';
import Store from './store/Store';
import { makeStyles } from '@material-ui/core/styles';
import AppContainer from './AppContainer';
import Navigation from './Navigation';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${'./resources/pictures/board.jpg'})`,
    minHeight: 750
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Store>
      <div className={classes.root}>
        <Navigation />
        <AppContainer />
      </div>
    </Store>
  );
}

export default App;
