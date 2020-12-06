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
  const { apiUrl } = { ...props };
  const classes = useStyles();
  const [players, setPlayers] = React.useState([]);

  // Fetch players when component mounts
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get(`${apiUrl}/players`)
        .then(res => {
          const data = res && res.data;
          setPlayers(data);
        })
    };
    fetchData();
  }, []);

  return (
  <List>
    { players.map(player =>
    <ListItem className={classes.players} key={player}>
      <ListItemIcon className={classes.players}>{ !!player.hasTurn && <SportsEsportsOutlinedIcon />}</ListItemIcon>
      {player.name} 
    </ListItem> )}
  </List>
  );
}
