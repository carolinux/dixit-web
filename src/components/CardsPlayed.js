import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GameCard from './GameCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 1500,
    minHeight: 270,
    width: '100%'
  }
}));

export default function CardsPlayed() {
  const classes = useStyles();
  const [cards, setCards] = React.useState([]);
   
  // TODO: Get this value from the API
  const playerHasTurn = true;

  // Fetch cards per player
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get(`http://localhost:5000/playedCards`)
        .then(res => {
          const data = res && res.data && res.data.cards;
          setCards(data);
        })
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      { cards.map((card) => (<GameCard key={card} card={card} open={false} playerHasTurn />)) }
    </div>
  )
}
