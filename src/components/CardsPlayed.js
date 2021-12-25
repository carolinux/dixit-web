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

export default function CardsPlayed(props) {
  const { apiUrl, mainPlayer } = { ...props };
  const classes = useStyles();
  const [cards, setCards] = React.useState([]);
  const [roundCompleted, setRoundCompleted] = React.useState(false);
   
  // Fetch cards per player
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get(`${apiUrl}/playedCards`)
        .then(res => {
          const roundCards = res && res.data && res.data.cards;
          const completed = res && res.data && res.data.roundCompleted;
          
          setCards(roundCards);
          setRoundCompleted(completed);
        })
    };
    //fetchData();
  }, []);

  return (
    <div className={classes.root}>
      { cards.map((card) => (<GameCard key={card} card={card} open={false}
        roundCompleted={roundCompleted} mainPlayer={mainPlayer} apiUrl={apiUrl} />)) }
    </div>
  )
}
