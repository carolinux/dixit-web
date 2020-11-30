import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GameCard from './GameCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Board() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6];
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cards.map(x =>
          <Grid item xs={4}>
            <GameCard card={x} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}