import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CardsPlayed from './CardsPlayed';
import Hand from './Hand';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Board() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <CardsPlayed />
        </Grid>
        <Grid item xs={6} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Hand />
        </Grid>
        <Grid item xs={6} sm={2}>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
