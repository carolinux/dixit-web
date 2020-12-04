import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  players: {
    color: 'white',
    fontFamily: 'Lobster'
  }
}));

export default function Players(props) {
  const classes = useStyles();

  const players = [
    { name: 'Eleni', hasTurn: true },
    { name: 'Theodore', hasTurn: false },
    { name: 'George', hasTurn: false }
  ]

  return (
  <List>
    { players.map(player =>
    <ListItem className={classes.players}>
      <ListItemIcon className={classes.players}>{ !!player.hasTurn && <SportsEsportsOutlinedIcon />}</ListItemIcon>
      {player.name} 
    </ListItem> )}
  </List>
  );
}
