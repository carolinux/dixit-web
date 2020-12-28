import React from 'react';
import Store from './store/Store';
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
  const [players, setPlayers] = React.useState([]);
  const [hasTurn, setHasTurn] = React.useState(false);
  const [mainPlayer, setMainPlayer] = React.useState(false);
  const apiUrl = 'http://localhost:5000';

  // Fetch players when component mounts
  React.useEffect(() => {
    const fetchPlayersData = async () => {
      axios.get(`${apiUrl}/players`)
        .then(res => {
          const data = res && res.data;
          setPlayers(data);
        })
    };

    const fetchTurnData = async () => {
      axios.get(`${apiUrl}/hasTurn`)
        .then(res => {
          const data = res && res.data;
          setHasTurn(data.hasTurn);
          setMainPlayer(data.mainPlayer);
        })
    };

    fetchPlayersData();
    fetchTurnData();
  }, []);

  return (
    <Store>
      <div className={classes.root}>
        <Navigation />
        <AppContainer apiUrl={apiUrl} hasTurn={hasTurn} mainPlayer={mainPlayer} />
      </div>
    </Store>
  );
}

export default App;
