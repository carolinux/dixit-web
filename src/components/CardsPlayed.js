import React, {Fragment, useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
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
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 1500,
    minHeight: 224,
    width: '50%',
    justifyContent: 'left'
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

export default function CardsPlayed(props) {
  const { cards, gameState, isNarrator, transitionGame, cardStatuses} = { ...props };
   const [open, setOpen] = useState(false);
  const [cardToSelect, setCardToSelect] = useState(undefined);
  const classes = useStyles();
  //console.log('played');
  //console.log(cards.length);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const play = (card) => {

    if (cardStatuses && cardStatuses.myPlayed==card) {
        return;
    }


    !!card && setCardToSelect(card);
    console.log('selected card '+card);
    openDialog();
  }

  const showDialog = gameState == 'waiting_for_votes' && !isNarrator;
  const question = "Sure to vote for this card?";


  const castVote = () => {
    let playedData = { vote: cardToSelect};
    closeDialog();
    transitionGame('vote', playedData);


  }
  const cancelSelection = () => {

    setCardToSelect(undefined);
    closeDialog();
  }


  return (
  <Fragment>
      <div className={classes.root}>
        {showDialog && cards.map((card, i) =>
          <Button key={card+'_'+i} onClick={() => play(card)}>
            <HandCard card={card} cardStatuses={cardStatuses} gameState={gameState} />
          </Button>)
        }

        {!showDialog && cards.map((card,i) =>
         <Button key={card+"_"+i}>
            <HandCard card={card} cardStatuses={cardStatuses} gameState={gameState} />
          </Button>)
        }

        {showDialog && <Dialog
          open={open}
          onClose={closeDialog}>

          <CardMedia
            className={classes.media}
            image={`http://127.0.0.1:3000/resources/pictures/cards/medusa/${cardToSelect}.jpg`}
            />

          <Fragment>
            <Typography variant='h6' className={classes.dialog}>
              {question}
            </Typography>
          </Fragment>

          <DialogActions className={classes.controls}>
            <Button onClick={cancelSelection} color='secondary'>
              <ClearIcon />
            </Button>
            <Button onClick={castVote} color='secondary'>
              <CheckIcon style={{ fill: '#39ff14' }}/>
            </Button>
          </DialogActions>
        </Dialog>}
        {cards.length ==0 && <Typography>Cards will appear here when played</Typography>}
      </div>
    </Fragment>
  )
}
