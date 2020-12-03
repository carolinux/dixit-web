import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    color: 'white',
    fontFamily: 'Lobster',
    textAlign: 'center'
  },
  root: {
    padding: 200
  }
}))

export default function Rules() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        How to play Dixit...
      </Typography>
      <br />
      <Typography variant="h6" className={classes.title}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
      </Typography>
    </div>
  );
}
