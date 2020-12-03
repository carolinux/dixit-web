import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GameCard from './GameCard';

const cards = [1,2,3,4,5,6];

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 1500,
    width: '100%'
  }
}));

export default function CardsPlayed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { cards.map((card) => (<GameCard key={card} card={card} open={false} />)) }
    </div>
  )
}
