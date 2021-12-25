import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import {Select, MenuItem} from '@material-ui/core';

export default function GameSelector(props) {
  const {playerName, updateGame} = { ...props };


  const [selection, setSelection] = useState("");
  const [games, setGames] = useState([]);
  const handleChange = (e) => {setSelection(e.target.value); updateGame(e.target.value)};


  useEffect(() => {
   let mounted = true;

    axios.get(process.env.REACT_APP_API_URL+ '/games?joinable_for_player=' + playerName)
     .then(resp => {
       console.log(resp)
       if(mounted) {
         setGames(resp.data.games)
       }
     })

   return () => mounted = false;
 }, [playerName])




  return (
  <Fragment>
  <Select onChange={handleChange} defaultValue="new">
  <MenuItem value="new">Start New Game</MenuItem>
  {games.map(game =>  <MenuItem value={game.id}>Existing game {game.id} with {game.players} player(s) ({game.playerString}) ({game.join_action})</MenuItem>)}
  </Select>

  </Fragment>
)
}