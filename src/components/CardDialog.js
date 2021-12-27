import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { getTexts } from './resources/Texts';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HandCard from './HandCard';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center'
  },
  title: {
    fontFamily: 'Lobster',
    textAlign: 'center',
    color: 'white'
  },
  dialog: {
    fontFamily: 'Lobster',
    textAlign: 'center',
    paddingTop: 20,
   // height: 500,
   // width: 300
  },
  media: {
    height: 400,
    width: 300
  },
  controls: {
    justifyContent: 'center'
  }
}));


// UNUSED

export default function cardDialog(props) {
  const {transitionGame } = { ...props };
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [cardToSelect, setCardToSelect] = useState(undefined);
  const [phrase, setPhrase] = useState('');
  const [formError, setFormError] = useState(false);


  const texts = getTexts();

  const question = isNarrator ? texts.cardSelectionDialog.question.mainPlayer
    : texts.cardSelectionDialog.question.otherPlayers;

   const prompt = determinePrompt(gameState, isNarrator);
   const showDialog = shouldShowDialog(gameState, isNarrator);



  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const play = (card) => {
    !!card && setCardToSelect(card);
    openDialog();
  }

  const completeHand = () => {
    let playedData = { card: cardToSelect};
    console.log('phrase: ' + phrase);
    if (isNarrator) {
      if (!!phrase) {
        setFormError(false);
        //setPhrase('');
        closeDialog();
        playedData = { ...playedData, phrase: phrase }
        transitionGame('set', playedData);
      } else {
        setFormError(true);
      }

    }
    else {

       closeDialog();
       transitionGame('set', playedData);
       // todo - somehow - update prompt..
    }

  }



  return (
    <Fragment>
      <div className={classes.root}>
        {showDialog && cards.map((card) =>
          <Button key={card} onClick={() => play(card)}>
            <HandCard card={card} />
          </Button>)
        }

        {!showDialog && cards.map((card) =>
         <Button key={card}>
            <HandCard card={card} />
          </Button>)
        }

        {showDialog && <Dialog
          open={open}
          onClose={closeDialog}>

          <CardMedia
            className={classes.media}
            image={`http://127.0.0.1:3000/resources/pictures/cards/medusa/${cardToSelect}.jpg`} />

          <Fragment>
            <Typography variant='h6' className={classes.dialog}>
              {question}
            </Typography>
          </Fragment>
          { isNarrator &&
            <DialogContent>
              <DialogContentText>
                <TextField onChange={addPhrase} fullWidth
                  helperText='Describe your card!'
                  error={formError}
                />
              </DialogContentText>
            </DialogContent>
          }

          <DialogActions className={classes.controls}>
            <Button onClick={closeDialog} color='secondary'>
              <ClearIcon />
            </Button>
            <Button onClick={ completeHand } color='secondary'>
              <CheckIcon style={{ fill: '#39ff14' }}/>
            </Button>
          </DialogActions>
        </Dialog>}
       <Fragment>
        <Typography variant='h6' className={classes.dialog}>
         {prompt}
        </Typography>
        </Fragment>
      </div>
    </Fragment>
  );
}
