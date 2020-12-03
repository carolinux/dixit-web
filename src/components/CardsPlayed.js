import React from 'react';
import { Context } from './store/Store';
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
   
  // Use global state
  const [state, setState] = React.useContext(Context);
  const cardsPlayed = state && state.cardsPlayed;

  // TODO: Get this value from the API
  const playerHasTurn = true;

  return (
    <div className={classes.root}>
      { cardsPlayed.map((card) => (<GameCard key={card} card={card} open={false} playerHasTurn />)) }
    </div>
  )
}
