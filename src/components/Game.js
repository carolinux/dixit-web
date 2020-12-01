import React from 'react';
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

const cards = [6, 7, 8, 9, 10];

export default function Game() {
  const classes = useStyles();

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
