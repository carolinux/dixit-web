import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GameCard from './GameCard';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 1500,
    minHeight: 224,
    width: '50%',
    justifyContent: 'left'
  }
}));

export default function CardsPlayed(props) {
  const { cards, gameState } = { ...props };
  const classes = useStyles();
  console.log('played');
  console.log(cards.length);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const play = (card) => {
    !!card && setCardToSelect(card);
    openDialog();
  }


  return (
    <div className={classes.root}>
      { cards.map((card, i) => (<GameCard key={card+i} card={card} open={false} />)) }
    </div>
  )
}
