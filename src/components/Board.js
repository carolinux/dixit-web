import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardsPlayed from './CardsPlayed';
import Hand from './Hand';
import Players from './Players';
import Phrase from './Phrase';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { getTexts } from './resources/Texts';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
  cardsPlayed: {
    minHeight: 270
  },


}));


function equalArray(a, b) {
    if (a.length === b.length) {
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

export default function Board(props) {

  const texts = getTexts();
  const axiosWithCookies = axios.create({
  withCredentials: true
});

  const {gid } = useParams();
  const mainPlayer = Cookies.get('player');
  const classes = useStyles();
  console.log("Game "+gid+" for player "+mainPlayer);
  const [players, setPlayers] = useState([{name: ''}]);
  const [gameState, setGameState] = useState('')

  /* get state every second */

  // TODO: Get this value from the API
  const roundCompleted = true;
  const playerPlayed = false;

  const startGame = () => {};

  const updateState = async () => {
    axiosWithCookies.get(process.env.REACT_APP_API_URL+ '/games/' + gid)
     .then(resp => {
       console.log('call update at '+  new Date().toLocaleString());
       let game = resp.data.game;
       let changed = false;


       if (JSON.stringify(players) !=  JSON.stringify(game.playerList)) {

            setPlayers(game.playerList);
            changed = true;
       }

       if (game.state != gameState) {

            setGameState(game.state); // this re-renders the component....
            changed = true;
        }

        console.log("changed "+changed);

        if (!changed) {

            setTimeout(() => updateState(), 5000) // maybe this isn't cleaned properly idk

        }

        }


     )

  };


  useEffect(() => {
  console.log('inside use effect')
    const timerID = setTimeout(() => updateState(), 200)
    return () => {
      clearTimeout(timerID)
    }
  }, [gameState, players]); // call useeffect every time something changes



  return (
    <Container>
      <Grid container>
        <Grid item xs={12} className={classes.cardsPlayed}>
           <CardsPlayed mainPlayer={mainPlayer} />
        </Grid>
        <Grid item xs={2} sm={2}>
          <Players players={players}/>
        </Grid>
        <Grid item xs={8} sm={10}>
          <Phrase/>
          <Hand hasTurn={false} mainPlayer={mainPlayer} />
        </Grid>
        <Grid item xs={2} sm={2}>
        <Typography variant='body2' className={classes.title}>
          There are {players.length} player(s) connected.
        </Typography>
         {gameState==="waiting_to_start" && <Button size='small' color='primary' onClick={startGame} className={classes.control}>
                    {texts.stateTransitions.start}
                  </Button>}
        </Grid>
      </Grid>
    </Container>
  );
}
