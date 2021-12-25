import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import AppContainer from './AppContainer';
import Navigation from './Navigation';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${'./resources/pictures/board.png'})`,
    minHeight: 750
  }
}));

function App() {
  const classes = useStyles();
  const [mainPlayer, setMainPlayer] = React.useState(false);
  const updatePlayer = (name) => setMainPlayer(name);

  return (
    <div className={classes.root}>
      <Navigation />
      <AppContainer updatePlayer={updatePlayer} />
    </div>
  );
}

export default App;