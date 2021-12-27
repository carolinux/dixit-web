import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { getTexts } from './resources/Texts';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GameSelector from './GameSelector';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 200,
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Lobster',
    paddingBottom: 10,
    color: '#e094e0'
  },
  paper: {
    height: 350,
    width: 500,
    textAlign: 'center',
    padding: 50
  },
  control: {
    padding: theme.spacing(2),
    color: '#e094e0'
  },
  form: {
    paddingBottom: 30
  },
  formText: {
    color: 'white'
  }
}));

export default function Login(props) {

  const texts = getTexts();
  const classes = useStyles();

  const {updatePlayer} = {...props};

  const [playerName, setPlayerName] = useState('');
  const [usedName, setUsedName] = useState(false);
  const [formError, setFormError] = useState(false);
  const [gameId, setGameId] = useState('new')
  const axiosWithCookies = axios.create({
  withCredentials: true
});

  let history = useHistory();

  const addPlayer = () => {
  console.log("Adding player to game")
  console.log(playerName);
  console.log(gameId)
    if (formError) { return }

    if (!!playerName && !!gameId) {
    console.log(process.env)
      const postData = async () => {
        axiosWithCookies.post(process.env.REACT_APP_API_URL+ '/games', { player: playerName, game: gameId })
          .then(res => {
            console.log(res.data);
            updatePlayer(playerName);
            history.push('/board/'+res.data['game']);
          })
      };
      postData();

    }
  }

  const updateName = (event) => {
    const name = event && event.target && event.target.value;
    if (!name) {
    console.log('setting form error')
      setFormError(true);
      setPlayerName(name);
    } else {
      setPlayerName(name);
      setFormError(false);
    }
  }


  const tryResumeFromCookie = () => {


    axiosWithCookies.get(process.env.REACT_APP_API_URL+ '/games/resume')
      .then(res => {
        console.log(res.data);
        console.log("Resume?")
        updatePlayer(res.data['player']);
        history.push('/board/'+res.data['game']);
      })
    .catch(function (error) {
    console.log(error.toJSON());
    })

  }


  useEffect(() => {
    console.log('inside use effect');
    tryResumeFromCookie();
    return;
  }, []); // call useeffect every time something changes






  const updateGame = (gid) => setGameId(gid);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={2}>
          <Grid item className={classes.paper}>
              <div className={classes.paper}>
                <Typography variant='h4' className={classes.title}>
                  {texts.login.title}
                </Typography>
                <Fragment>
                  <form noValidate autoComplete='off' className={classes.form}>
                    <TextField onChange={updateName}
                      helperText={texts.login.question}
                      error={formError}
                      className={classes.formText}
                      value={playerName}
                    />
                  </form>
                  {!!usedName &&
                    <Typography variant='h6' className={classes.title}>
                      {texts.login.nameUsed}
                    </Typography>
                  }
                <GameSelector playerName={playerName} updateGame={updateGame} />

                  <Button size='small' color='primary' onClick={addPlayer} className={classes.control}>
                    {texts.login.ready}
                  </Button>
                </Fragment>
              </div>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
