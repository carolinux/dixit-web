import React, { Fragment } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  phrase: {
    fontFamily: 'Lobster',
    textAlign: 'center',
    color: '#f5f6b1',
    fontStyle: 'italic'
  }
}));

export default function Phrase(props) {
  const { apiUrl } = { ...props };
  const classes = useStyles();
  const [phrase, setPhrase] = React.useState('');
  
  // Fetch phrase
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get(`${apiUrl}/playedCards`)
        .then(res => {
          const data = res && res.data && res.data.phrase;
          setPhrase(data);
        })
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      { !!phrase && <Typography variant='h6' className={classes.phrase}>« { phrase } »</Typography> }
    </Fragment>
  );
}
