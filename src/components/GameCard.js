import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  gameCard: {
    width: 240,
    height: 350,
  },
  paper: {
    textAlign: 'center',
    width: 240
  },
}));

export default function GameCard(props) {
  const { card } = { ...props };
  const pictureUrl = `./resources/pictures/${card}.jpg`;
  
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={10}>
      <CardMedia
        className={classes.gameCard}
        image={ pictureUrl }
      />
    </Paper>
  );
}
