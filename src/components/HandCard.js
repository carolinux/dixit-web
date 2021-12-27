import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from "@material-ui/core/CardContent";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  card: {
    width: 150,
    height: 224,
  }
}));

export default function HandCard(props) {
  const { card, selected } = { ...props };
  const pictureUrl = `http://127.0.0.1:3000/resources/pictures/cards/medusa/${card}.jpg`;
  const classes = useStyles();
  console.log("isSelected");
  console.log(selected);

  return (
    <Card raised className={ classes.cardContainer }>
      <CardMedia
        className={ classes.card }
        image={ pictureUrl } />
               {selected &&     <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                My Vote
              </Typography>

            </CardContent>}
    </Card>
  );
}
