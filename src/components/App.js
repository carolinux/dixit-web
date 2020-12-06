import React from 'react';
import Store from './store/Store';
import axios from 'axios';
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
  const [players, setPlayers] = React.useState([]);

  // Fetch players when component mounts
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get('http://localhost:5000/players')
        .then(res => {
          const data = res && res.data;
          setPlayers(data);
        })
    };
    fetchData();
  }, []);

  return (
    <Store>
      <div className={classes.root}>
        <Navigation />
        <AppContainer players={players} />
      </div>
    </Store>
  );
}

export default App;
