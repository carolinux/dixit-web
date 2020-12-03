import React from 'react';
import { Context } from './store/Store';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HandCard from './HandCard';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
  title: {
    fontFamily: 'Lobster',
    textAlign: 'center',
    color: 'white'
  },
}));

const cards = [1, 2, 3, 4, 5, 6];
export default function Hand() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [yourTurn, setYourTurn] = React.useState(false);
  const [cardToSelect, setCardToSelect] = React.useState(undefined);
  const question = yourTurn ? 'What is your phrase?' : 'Sure to play this card?';
  
  // Use global state
  const [state, setState] = React.useContext(Context);
  
  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const startSelection = (card) => {
    !!card && setCardToSelect(card);
    openDialog();
  }
  const completeSelection = () => {
    setState({ type: 'SELECT_CARD', payload: cardToSelect });
    closeDialog();
  }

  return (
    <div>
     <Typography variant="h4" className={classes.title}>
        Your cards...!
      </Typography>
      { !yourTurn && <Typography variant="h6" className={classes.title}>
        It's the turn of player ... to play.
      </Typography>}
      { !!yourTurn && <Typography variant="h6" className={classes.title}>
        It's your turn to play! Select a card...!
      </Typography>}
      {cards.map(card =>
        <Button key={card} onClick={() => startSelection(card)}>
          <HandCard card={card} />
        </Button>)}

        <Dialog
          open={open}
          onClose={closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{question}</DialogTitle>
        <DialogContent>
          { yourTurn && <DialogContentText id="alert-dialog-description">
            <TextField label="Type a phrase about this card..." fullWidth />
          </DialogContentText> }
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={completeSelection} color="primary" autoFocus>
            Select
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
