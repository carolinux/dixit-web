import React from 'react';
import Store from './store/Store';
import { makeStyles } from '@material-ui/core/styles';
import AppNavigation from './AppNavigation';
import TopNavigation from './TopNavigation';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${'./resources/pictures/board.jpg'})`,
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Store>
      <div className={classes.root}>
        <TopNavigation />
        <AppNavigation />
      </div>
    </Store>
  );
}

export default App;
