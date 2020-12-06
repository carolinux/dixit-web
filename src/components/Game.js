import React from 'react';
import { Context } from './store/Store';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import GameCard from './GameCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Lobster',
    color: 'white',
    textAlign: 'center'
  },
  paper: {
    color: theme.palette.text.secondary,
  },
}));

export default function Game() {
  const classes = useStyles();
  const [cards, setCards] = React.useState([]);

  // Use global state
  const [state, setState] = React.useContext(Context);

  // Fetch cards per player
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:5000/playedCards`)
        .then(res => {
          const data = res && res.data;
          console.log(data)
          setCards(data);
        })
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <h1>
        Guess the first card!
      </h1>
      <div>
        { cards.map(x =>
          <Button key={x}>
            <GameCard card={x} open={false}/>
          </Button>) }
      </div>
    </div>
  );
}
