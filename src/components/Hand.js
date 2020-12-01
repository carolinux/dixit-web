import React from 'react';
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
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [yourTurn, setYourTurn] = React.useState(true);

  const selectCardDialogOpen = () => {
    setDialogOpen(true);
  };

  const selectCardDialogClose = () => {
    setDialogOpen(false);
  };

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
      {cards.map(x =>
        <Button key={x} onClick={selectCardDialogOpen} disabled={!yourTurn}>
          <HandCard card={x} />
        </Button>)}

        <Dialog
          open={dialogOpen}
          onClose={selectCardDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{'Add a phrase about this card ;)'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField label="Type a phrase about this card..." fullWidth />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={selectCardDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={selectCardDialogClose} color="primary" autoFocus>
            Select
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
