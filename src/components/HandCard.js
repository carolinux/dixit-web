import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(() => ({
  gameCard: {
    width: 240,
    height: 350,
  }
}));

export default function HandCard(props) {
  const { card } = { ...props };
  const pictureUrl = `./resources/pictures/cards/${card}.jpg`;
  const classes = useStyles();

  return (
    <Card raised className={classes.gameCard}>
      <CardMedia
        className={classes.gameCard}
        image={ pictureUrl } />
    </Card>
  );
}
