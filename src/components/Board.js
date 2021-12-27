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


export default function Board(props) {

  const texts = getTexts();
  const axiosWithCookies = axios.create({
  withCredentials: true
});

  const {gid } = useParams();
  const mainPlayer = Cookies.get('player');
  const classes = useStyles();
  console.log("Game "+gid+" for player "+mainPlayer);

  const [players, setPlayers] = useState([]);
  const [gameState, setGameState] = useState('');
  const [cards, setCards] = useState([]); // cards in hand
  const [playedCards, setPlayedCards] = useState([]); // cards active in round
  const [isNarrator, setIsNarrator] = useState(false);
  const [phrase, setPhrase] = useState('');
  let currTimeout = undefined;



  const roundCompleted = true;
  const playerPlayed = false;

  const updateFromApi = (game) => {

         let changed = false;

       if (JSON.stringify(players) !=  JSON.stringify(game.playerList)) {
            setPlayers(game.playerList);
                        //console.log('pl');
            changed = true;
       }

       if (JSON.stringify(cards) !=  JSON.stringify(game.roundInfo.hand)) {
            setCards(game.roundInfo.hand);
                        //console.log('ha');
            changed = true;
       }

         if (JSON.stringify(playedCards) !=  JSON.stringify(game.roundInfo.playedCards)) {
            setPlayedCards(game.roundInfo.playedCards);
                        //console.log('cards');
            changed = true;
       }
       if (game.state != gameState) {
                  // console.log('st');
            setGameState(game.state); // this re-renders the component....
            changed = true;
        }

        if (game.isNarrator != isNarrator) {
                    //console.log('narr');
            setIsNarrator(game.isNarrator);
            changed = true;
        }
        if (game.roundInfo.phrase != phrase) {
            setPhrase(game.roundInfo.phrase);
            //console.log('phrase');
            changed = true;
        }



        return changed;

  }

  const transitionGame = (transition, transitionData) => {

  if (transitionData === undefined) {
    transitionData = {};
  }

   axiosWithCookies.put(process.env.REACT_APP_API_URL+ '/games/' + gid + '/' + transition, transitionData)
     .then(resp => {
       let game = resp.data.game;
       updateFromApi(game);
     });
  };

  const updateState = async () => {
    axiosWithCookies.get(process.env.REACT_APP_API_URL+ '/games/' + gid)
     .then(resp => {
       console.log('call update at '+  new Date().toLocaleString());
       //console.log(resp.data.game);
       let game = resp.data.game;
       let changed = updateFromApi(game);
       //console.log("changed "+changed);
       if (!changed) {
            currTimeout = setTimeout(() => updateState(), 5000) // maybe this isn't cleaned properly idk
        }
      }
     )

  };


  useEffect(() => {
  console.log('inside use effect')
    const timerID = setTimeout(() => updateState(), 200)
    return () => {
      clearTimeout(timerID);
      if (currTimeout) {
      clearTimeout(currTimeout);}
    }
  }, [gameState, players, cards, playedCards, isNarrator, phrase]); // call useeffect every time something changes



  return (
    <Container>
      <Grid container>

         <Grid item xs={2} sm={2}>
          PLACEHOLDER
        </Grid>

        <Grid item xs={8} sm={10} className={classes.cardsPlayed}>
           <CardsPlayed cards={playedCards} gameState={gameState} />
        </Grid>

        <Grid item xs={2} sm={2}>
          <Players players={players}/>
        </Grid>
        <Grid item xs={8} sm={10}>
          <Phrase phrase={phrase}/>
          <Hand isNarrator={isNarrator} player={mainPlayer} cards={cards} transitionGame={transitionGame} gameState={gameState}/>
        </Grid>
        <Grid item xs={2} sm={2}>
        <Typography variant='body2' className={classes.title}>
          There are {players.length} player(s) connected.
        </Typography>
        {gameState==="waiting_to_start" && <Button size='small' color='primary' onClick={() => transitionGame('start')} className={classes.control}>
          {texts.stateTransitions.start}
        </Button>
        }
        </Grid>
      </Grid>
    </Container>
  );
}
