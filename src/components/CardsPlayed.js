import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GameCard from './GameCard';
import { CenterFocusStrong } from '@material-ui/icons';

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
   
  // Fetch cards per player
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get(`${apiUrl}/playedCards`)
        .then(res => {
          const data = res && res.data && res.data.cards;
          setCards(data);
        })
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      { cards.map((card) => (<GameCard key={card} card={card} open={false} mainPlayer={mainPlayer} />)) }
    </div>
  )
}
