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
  const { card, cardStatuses, gameState } = { ...props };
  const pictureUrl = `http://127.0.0.1:3000/resources/pictures/cards/medusa/${card}.jpg`;
  const classes = useStyles();


  return (
    <Card raised className={ classes.cardContainer }>
      <CardMedia
        className={ classes.card }
        image={ pictureUrl } />
               {cardStatuses && cardStatuses.myPlayed  && cardStatuses.myPlayed === card && gameState === "waiting_for_votes" &&
                <CardContent>
              <Typography style={{ fontFamily: 'Lobster' }}>
               my card
              </Typography>

            </CardContent>}

                {cardStatuses && cardStatuses.myVoted  && cardStatuses.myVoted === card && gameState === "waiting_for_votes" &&
                <CardContent>
              <Typography style={{ fontFamily: 'Lobster' }}>
               my vote
              </Typography>

            </CardContent>}
    </Card>
  );
}
