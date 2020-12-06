import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getTexts } from './resources/Texts';

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
  const texts = getTexts();

  return (
    <div className={classes.root}>
      <Typography variant='h5' className={classes.title}>
        {texts.rules.title}
      </Typography>
      <Typography variant='h5' className={classes.title}>
        {texts.divider}
      </Typography>
      <br />
      <Typography variant='h6' className={classes.title}>
        {texts.rules.description}
      </Typography>
      <Typography variant='h6' className={classes.title}>
        <a href='/login'>{texts.rules.play}</a>
      </Typography>
    </div>
  );
}
