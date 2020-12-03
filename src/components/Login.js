import React, { useState, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from './store/Store';
import { makeStyles } from '@material-ui/core/styles';
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

export default function Login() {
  const classes = useStyles();
  const [playerName, setPlayerName] = useState('');
  const [usedName, setUsedName] = useState(false);
  const [roomFull, setRoomFull] = useState(false);

  // Use global state
  const [state, setState] = useContext(Context);

  let history = useHistory();  

  const addPlayer = () => {
    const { players, playersCounter } = { ...state };
    if(playersCounter>=5) {
      setRoomFull(true);
      return;
    }

    if(!!players[playerName]) {
      setUsedName(true);
      return;
    } else {
      setUsedName(false);
    }
    if(!!playerName){
      setState({type: 'ADD_PLAYER', payload: playerName});
      history.push('/hand');
    }
  }

  const updateName = (event) => {
    const name = event && event.target && event.target.value;
    setPlayerName(name);
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={classes.title}>
                Choose a name & enter the game!
              </Typography>
              { !roomFull && 
              <Fragment>
                <form noValidate autoComplete="off" className={classes.form}>
                  <TextField id="outlined-basic" label="Player name" variant="outlined" onChange={updateName} />
                </form>
                { !!usedName && 
                  <Typography variant="h6" className={classes.title}>
                    Someone is using already this name...
                  </Typography>
                }
                <Button size="small" color="primary" onClick={addPlayer}>
                  I'm ready!
                </Button>
              </Fragment>  }
              { !!roomFull &&
                <Typography variant="h5" className={classes.title}>
                  The room is full...
                </Typography> }
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
