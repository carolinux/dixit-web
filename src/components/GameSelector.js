import React, { useState, Fragment } from 'react';
import axios from 'axios';
import {Select, MenuItem} from '@material-ui/core';

export default function GameSelector(props) {
  const {playerName } = { ...props };

  const fetchGames = () => {
      const getData = async () => {
        axios.get(process.env.REACT_APP_API_URL+ '/games', { player: playerName })
          .then(res => {
            console.log(res.data);
          })
      };
      getData();
  }

  const [selection, setSelection] = useState("");
  const [games, setGames] = useState([]);
  const handleChange = (e) => setSelection(e.target.value);



  return (
  <Fragment>
  <Select onChange={handleChange} defaultValue="new">
  <MenuItem value="new">Create New Game</MenuItem>
  <MenuItem value="2">Another action</MenuItem>
  <MenuItem value="3">Something else here</MenuItem>
  </Select>

  <p> selected {selection} for {playerName}</p>
  </Fragment>
)
}