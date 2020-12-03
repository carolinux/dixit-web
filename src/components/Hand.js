import React, { Fragment } from 'react';
import { Context } from './store/Store';
import { makeStyles } from '@material-ui/core/styles';
import { getTexts } from './resources/Texts';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HandCard from './HandCard';
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
  dialog: {
    fontFamily: 'Lobster',
    textAlign: 'center'
  }
}));

export default function Hand() {
  // TODO: Get cards from the API
  const cards = [1, 2, 3, 4, 5, 6];

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [yourTurn, setYourTurn] = React.useState(true);
  const [cardToSelect, setCardToSelect] = React.useState(undefined);
  
  // TODO: Get current player from the API
  const currentPlayer = 'George';
  const texts = getTexts({currentPlayer});

  const question = yourTurn ? texts.cardSelectionDialog.question.mainPlayer
        : texts.cardSelectionDialog.question.otherPlayers;

  const whoseTurnMessage = yourTurn ? texts.whoseTurn.currentPlayer : texts.whoseTurn.yourTurn;
  
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
    <Fragment>
     <Typography variant='h4' className={classes.title}>
        { texts.yourCards }
      </Typography>
      <Typography variant='h4' className={classes.title}>
        { whoseTurnMessage }
      </Typography>

      { cards.map(card =>
        <Button key={card} onClick={() => startSelection(card)}>
          <HandCard card={card} />
        </Button>)
      }

      <Dialog
        open={open}
        onClose={closeDialog}>

        <Typography variant='h6' className={classes.dialog}>
          { question }
        </Typography>
        
        { yourTurn && <DialogContent>
          <DialogContentText>
            <TextField label={question} fullWidth />
          </DialogContentText>
        </DialogContent> }

        <DialogActions>
          <Button onClick={closeDialog} color='primary'>
            {texts.cardSelectionDialog.controls.cancel}
          </Button>
          <Button onClick={completeSelection} color='primary'>
            {texts.cardSelectionDialog.controls.select}
          </Button>
        </DialogActions>
      </Dialog>

    </Fragment>
  );
}
