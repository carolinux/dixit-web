import React, { useState, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from './store/Store';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { getTexts } from './resources/Texts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontFamily: 'Lobster',
    paddingBottom: 10
  },
  paper: {
    height: 250,
    width: 400,
    textAlign: 'center',
    padding: 50
  },
  control: {
    padding: theme.spacing(2),
  },
  form: {
    paddingBottom: 30,
  },
}));

export default function Login(props) {
  const { players, apiUrl } = { ...props };
  const texts = getTexts();
  const classes = useStyles();
  
  const [playerName, setPlayerName] = useState('');
  const [usedName, setUsedName] = useState(false);
  const [formError, setFormError] = useState(false);

  // Use global state
  const [state, setState] = useContext(Context);

  let history = useHistory();

  const addPlayer = () => {
    if (formError) { return }
    const { players } = { ...state };

    if (!!players[playerName]) {
      setUsedName(true);
      return;
    } else {
      setUsedName(false);
    }

    if (!!playerName) {
      setState({ type: 'ADD_PLAYER', payload: playerName });
      const postData = async () => {
        axios.post(`${apiUrl}/players`, { player: playerName })
          .then(res => {
            console.log(res.data);
          })
      };
      postData();

      history.push('/board');
    }
  }

  const updateName = (event) => {
    const name = event && event.target && event.target.value;
    if (!name) {
      setFormError(true);
    } else {
      setPlayerName(name);
      setFormError(false);
    }
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              {players.length < 6 &&
                <Fragment className={classes.paper}>
                  <Typography variant='h4' className={classes.title}>
                    {texts.login.title}
              </Typography>
                  <Fragment>
                    <form noValidate autoComplete='off' className={classes.form}>
                      <TextField onChange={updateName}
                        helperText={texts.login.question}
                        error={formError}
                      />
                    </form>
                    {!!usedName &&
                      <Typography variant='h6' className={classes.title}>
                        {texts.login.nameUsed}
                      </Typography>
                    }
                    <Button size='small' color='primary' onClick={addPlayer}>
                      {texts.login.ready}
                </Button>
                  </Fragment>
                </Fragment>}

              {players.length === 6 &&
                <Typography variant='h4' className={classes.title}>
                  {texts.login.fullGame}
              </Typography>
              }
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
