import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardsPlayed from './CardsPlayed';
import Hand from './Hand';
import Players from './Players';
import Phrase from './Phrase';
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  cardsPlayed: {
    minHeight: 270
  }
}));

export default function Board(props) {
  const {gid } = useParams();

  const {mainPlayer} =  {...props };
  const classes = useStyles();
  const [boardClean, setBoardClean] = React.useState(true);
  console.log("Game "+gid+" for player "+mainPlayer);

  /* get state every second */

  // TODO: Get this value from the API
  const roundCompleted = true;
  const playerPlayed = false;

  React.useEffect(() => {
    !!roundCompleted && setBoardClean(true);
    !!playerPlayed && setBoardClean(false);
  }, [roundCompleted, playerPlayed])

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} className={classes.cardsPlayed}>
          {!!boardClean && <CardsPlayed mainPlayer={mainPlayer} />}
        </Grid>
        <Grid item xs={2} sm={2}>
          <Players/>
        </Grid>
        <Grid item xs={8} sm={10}>
          <Phrase/>
          <Hand hasTurn={false} mainPlayer={mainPlayer} />
        </Grid>
        <Grid item xs={2} sm={2}></Grid>
      </Grid>
    </Container>
  );
}
