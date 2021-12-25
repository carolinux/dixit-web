import React from 'react';
import axios from 'axios';
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
  const { players } = { ...props };
  const classes = useStyles();

  return (
  <List>
    { players.map(player =>
    <ListItem className={classes.players} key={player.name}>
      <ListItemIcon className={classes.players}><SportsEsportsOutlinedIcon /></ListItemIcon>
      {player.name}
    </ListItem> )}
  </List>
  );
}
