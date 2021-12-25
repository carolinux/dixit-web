import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(() => ({
  card: {
    width: 140,
    height: 250,
  }
}));

export default function HandCard(props) {
  const { card } = { ...props };
  const pictureUrl = `http://127.0.0.1:3000/resources/pictures/cards/${card}.jpg`;
  const classes = useStyles();

  return (
    <Card raised className={ classes.cardContainer }>
      <CardMedia
        className={ classes.card }
        image={ pictureUrl } />
    </Card>
  );
}
