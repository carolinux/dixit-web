import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  gameCard: {
    width: 240,
    height: 350,
  }
}));

export default function GameCard(props) {
  const { card, open } = { ...props };
  const pictureUrl = `./resources/pictures/cards/${card}.jpg`;
  const defaultPictureUrl = `./resources/pictures/cards/0.jpg`;
  const classes = useStyles();

  const [cardOpen, setCardOpen] = React.useState(open);
  
  const flipCard = () => {
    setCardOpen(!cardOpen)
  }
  
  return (
    <Button onClick={flipCard}>
      { !!cardOpen && 
        <Card raised className={classes.gameCard}>
          <CardMedia
            className={classes.gameCard}
            image={ pictureUrl } />
        </Card>
      }
      { !cardOpen &&
        <Card raised className={classes.gameCard}>
          <CardMedia className={classes.gameCard}
            image={ defaultPictureUrl } />
        </Card>
      }
    </Button>
  );
}
